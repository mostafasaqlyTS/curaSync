import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';

interface TabItem {
  label: string;
  icon?: string; // Made optional for flexibility
  route: string;
}

@Component({
  selector: 'app-tabs',
  imports: [ RouterModule, TabViewModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'], // Fixed typo: styleUrl -> styleUrls
  changeDetection: ChangeDetectionStrategy.OnPush // Optimized for performance
})
export class TabsComponent implements OnInit {
  @Input() tabs: TabItem[] = [];

  ngOnInit(): void {
    // Ensure tabs input is valid
    if (!this.tabs || !Array.isArray(this.tabs)) {
      console.error('TabsComponent: Invalid tabs input');
    }
  }
}
