import { DataService } from './../../services/data.service';
import { Component, OnInit,Input  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RootObject } from "../../interfaces/data.interface";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-recursodata',
  templateUrl: './recursodata.component.html',
  styleUrls: ['./recursodata.component.scss']
})
export class RecursodataComponent implements OnInit {
  @Input()
  public loading: boolean=false;
  recurso:RootObject;
  constructor(public authService: AuthService,private router: Router, private activatedRoute: ActivatedRoute,private ds:DataService) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getRecursoId(id);
  }
  edit(recurso: RootObject) {
    this.ds.selectrecurso = recurso;
    this.router.navigate(['/editrecurso', this.recurso._id])
  }
  delete(){
    this.ds.deletedata(this.recurso._id).subscribe(()=>{
      alert("delte recurso")
      this.router.navigate(['/recursos'])
    })

  }
  // delete() {
  //   this.ds.deletedata(this.recurso._id).subscribe(
  //     res => {
  //       console.log(res)
  //       localStorage.setItem('token', res.token)
  //       this.router.navigate(['/recursos'])
  //     },
  //     err => console.log(err)
  //   )
  // }
  getRecursoId(id: string) {
    this.ds.getDataId(id).subscribe(
      (data) => {
        this.recurso = data;  
        this.loading=true;  
      },
      (err) => (alert("wwwwww"))
    );
  }


}
