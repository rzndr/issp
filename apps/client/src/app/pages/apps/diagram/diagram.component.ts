import { Component } from '@angular/core';
import { DiagramSimpleComponent } from '../../../components/common/diagram/diagram.component';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [MaterialModule, DiagramSimpleComponent],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
})
export class DiagramComponent {}