import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  Signal,
  signal,
  ViewChild,
} from '@angular/core';
import { TuiSheetDialog, TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';
import { TUI_WINDOW_SIZE, TuiSwipe, TuiSwipeDirection } from '@taiga-ui/cdk';
import { map } from 'rxjs';

@Component({
  selector: 'pa-bottom-sheet',
  standalone: true,
  imports: [CommonModule, TuiSheetDialog, TuiSwipe],

  templateUrl: './bottom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetComponent implements OnInit {
  options = input<Partial<TuiSheetDialogOptions>>();

  onOpen = output();
  onClose = output();

  @ViewChild('topMark', { read: ElementRef })
  topMark!: ElementRef<HTMLElement>;

  private readonly size$ = inject(TUI_WINDOW_SIZE);

  protected isOpened = signal(false);
  private readonly offset = 16;

  protected readonly height$ = this.size$.pipe(
    map(({ height }) => `calc(${height - this.offset}px - 14rem`)
  );

  protected defaultOptions = signal<Partial<TuiSheetDialogOptions>>({
    offset: this.offset,
  });

  ngOnInit(): void {
    this.defaultOptions.set({ ...this.defaultOptions(), ...this.options() });
  }

  open(): void {
    this.toggle(true);
  }

  close(): void {
    this.toggle(false);
  }

  protected toggle(open: boolean): void {
    this.isOpened.set(open);
    if (open) {
      this.onOpen.emit();
    } else {
      this.onClose.emit();
    }
  }

  protected onSwipe(direction: TuiSwipeDirection): void {
    if (direction === 'top') {
      this.scroll();
    }
  }

  private scroll(): void {
    const container = this.topMark?.nativeElement?.closest('tui-sheet-dialog');

    if (!container) {
      return;
    }

    container.scrollTop = container.clientHeight;
  }
}
