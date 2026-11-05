import { Directive, signal } from '@angular/core';

/** Deixa o elemento ser arrastado com mouse, dedo ou caneta (deslocamento via --x / --y). */
@Directive({
  selector: '[appDraggable]',
  exportAs: 'appDraggable',
  host: {
    '[class.dragging]': 'dragging()',
    '[style.--x]': 'x() + "px"',
    '[style.--y]': 'y() + "px"',
    '(pointerdown)': 'start($event)',
    '(pointermove)': 'move($event)',
    '(pointerup)': 'end()',
    '(pointercancel)': 'end()',
  },
})
export class Draggable {
  protected readonly x = signal(0);
  protected readonly y = signal(0);
  protected readonly dragging = signal(false);

  private origin = { pointerX: 0, pointerY: 0, x: 0, y: 0 };

  reset(): void {
    this.x.set(0);
    this.y.set(0);
  }

  protected start(event: PointerEvent): void {
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.origin = { pointerX: event.clientX, pointerY: event.clientY, x: this.x(), y: this.y() };
    this.dragging.set(true);
  }

  protected move(event: PointerEvent): void {
    if (!this.dragging()) return;
    this.x.set(this.origin.x + event.clientX - this.origin.pointerX);
    this.y.set(this.origin.y + event.clientY - this.origin.pointerY);
  }

  protected end(): void {
    this.dragging.set(false);
  }
}
