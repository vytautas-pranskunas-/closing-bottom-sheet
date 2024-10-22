import { inject, Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TUI_CONFIRM, TuiConfirmData } from '@taiga-ui/kit';

@Injectable({ providedIn: 'root' })
export class ConfirmationDialogService {
  private readonly dialogs = inject(TuiDialogService);

  show({
    label,
    message,
    isDanger,
    callback,
  }: {
    label: string;
    message?: string;
    isDanger?: boolean;
    callback: () => void;
  }): void {
    const data: TuiConfirmData = {
      content: message,
      appearance: isDanger ? 'danger' : undefined,
    };

    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        appearance: 'parama-dialog',
        label,
        size: 'm',
        data,
      })
      .subscribe((response) => {
        if (response) {
          callback();
        }
      });
  }
}
