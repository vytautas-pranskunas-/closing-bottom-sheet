import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { TuiButton, TuiDialogService, TuiRoot } from '@taiga-ui/core';
import { TUI_CONFIRM } from '@taiga-ui/kit';
import { BottomSheetComponent } from 'app/bottom.component';
import { ConfirmationDialogService } from 'app/confirm.service';

@Component({
    selector: 'pa-app',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [BottomSheetComponent, TuiButton],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    title = 'test';

    private readonly confirmationDialog = inject(ConfirmationDialogService);

    @ViewChild(BottomSheetComponent) bottomSheet!: BottomSheetComponent;
    private readonly dialogs = inject(TuiDialogService);

    ngOnInit(): void {
    }

    testComfirm() {
      this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        appearance: 'parama-dialog',
        label: 'labas',
        size: 'm',
      })
      .subscribe((response) => {
        if (response) {
          console.log('auuu')
        }
      });
       /*  this.confirmationDialog.show({
            label: 'labas',
            message: `dfdf`,
            isDanger: true,
            callback: () => console.log('auuu'),
        }); */
    }

    open() {
      this.bottomSheet.open();
    }
}
