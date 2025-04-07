import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [TranslatePipe, NgStyle],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit {
  listOfContentAboutUs = signal<{ title: string; image: string; description: string }[]>([]);

  constructor() {}

  ngOnInit(): void {
    const AboutUsObjectJson = signal<string>('aboutUsPage');
    this.listOfContentAboutUs.set([
      {
        title: `${AboutUsObjectJson()}.Who we are`,
        image: '../../../assets/undraw_scientist_5td0.svg',
        description: `${AboutUsObjectJson()}.contentWhoWeAre`
      },
      {
        title: `${AboutUsObjectJson()}.our vision`,
        image: '../../../assets/undraw_creative-experiment_bzae.svg',
        description: `${AboutUsObjectJson()}.contentOurVision`
      },
      {
        title: `${AboutUsObjectJson()}.our mission`,
        image: '../../../assets/undraw_doctors_djoj.svg',
        description: `${AboutUsObjectJson()}.contentOurMission`
      }
    ]);
  }

}
