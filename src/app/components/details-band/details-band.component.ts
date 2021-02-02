import { Component, OnInit } from '@angular/core';
import { Band, BandsService } from 'src/app/bands.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details-band',
  templateUrl: './details-band.component.html',
  styleUrls: ['./details-band.component.scss']
})
export class DetailsBandComponent implements OnInit {

  selectedBand: Band;
  selectedMember: string;
  memberBands:string[];

  constructor(
    private bandsService: BandsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getBand();
  }

  getBand():void{
    const id = +this.route.snapshot.paramMap.get('id'); //plus służy do konwersji na numer, przyjmowany przez 'route/:id'
    this.bandsService.getBand(id).subscribe(band=>this.selectedBand=band);
  }
  memberDetails(member:string){
    this.selectedMember = member;
    this.getMemberBands(this.selectedMember);
  }
  getMemberBands(selectedMember:string){
    this.bandsService.getMemberBands(selectedMember).subscribe(bands => this.memberBands = bands);
  }

}

  


