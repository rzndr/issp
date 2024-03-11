import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { CoreService } from '../../../services/core.service';

@Component({
  selector: 'app-boxed-two-steps',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './boxed-two-steps.component.html',
})
export class AppBoxedTwoStepsComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}