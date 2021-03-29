import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,FormBuilder, Validators,FormsModule} from '@angular/forms';
import { ItemService } from './item.service';




@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {
  
  page:Number=1;
  totallength:Number;
  showModal : boolean;
  
 
  
  pageChanged(event){
    this.data.currentPage = event;
  }
  
  public abc ;
  public abd ;
  onClick(event,id,name)
  {
    this.showModal = true;
    this.dat=this.data.find(x=>x.id===id && x.name===name);
    this.abc=this.dat.id;
    this.abd=this.dat.name;
    console.log(this.dat);
    
    
      // this.UserId = event.target.id;
      // this.Firstname = document.getElementById("firstname"+this.UserId).innerHTML;
      // this.Lastname = document.getElementById("lastname"+this.UserId).innerHTML;
      // this.Email = document.getElementById("email"+this.UserId).innerHTML;
      
      
  }

  hide()
  {
    this.showModal = false;

  
  }
  
  public item=[];
  public openform=false;
  public hideadd=true;
  public hideupdate=false;
  public opentab=true;
   data:any=[]
   public dat;
   public da;
   public index;
   public s;
   public sa ;
   public a;
   public srch;
   public upload:File=null;
   public url;
   nodata:boolean=true;
   
  
  constructor(private _itemm:ItemService,private fb:FormBuilder) { }
  

  userprofileform=this.fb.group({
    id:new FormControl('',[Validators.required,Validators.pattern("^([1-9][0-9]{0,2}|999)$"),Validators.minLength(1)]),
    name:new FormControl('',[Validators.required,Validators.minLength(1)]),
    doc:new FormControl('')
  
  })
  
  ngOnInit(): void {
    this.item=this._itemm.getitem();
  }
  get f(){
    return this.userprofileform.controls;
  }


 onClickOpenForm(){
  this.openform=true;
  this.hideupdate=false;
  this.hideadd=true;
  this.userprofileform.reset();
  this.opentab=false;
  return this.openform;
  
  }
  
    derow(id){
    this.openform=false;
     
    for(let i=0;i<this.data.length;++i){
      if(this.data[i].id==id){
        this.data.splice(i,1);
      }
    this.s=this.data.length+" Entries";
    }
    if(this.data.length<1){
      this.nodata=true;
    }
  }
   onsubmit(){
    this.data.push(this.userprofileform.value);
    console.log(this.data);
 
    this.nodata=false;
    this.openform=false;
    this.opentab=true;
    this.s=this.data.length+" Entries"; 
    this.totallength=this.data.length;
    
    
      
   }
   view(id,name){
     this.dat=this.data.find(x=>x.id===id && x.name===name);
    this.index=this.data.findIndex(x=>x.id===id && x.name===name);
    
    // this.dat.id;
    // var a=this.dat.id;
    this.userprofileform.patchValue({
      id:this.dat.id,
      name:this.dat.name
    })
    this.opentab=false;
    this.hideadd=false;
    this.hideupdate=true;
     this.openform=true;
     
   }
   update(i){
    this.data.splice(i,1,this.userprofileform.value);
    this.opentab=true;
    this.openform=false;
  }
  search(e){
    this.srch=e;
    this.s="Search Results";

  }
  formclose(){
    this.opentab=true;
    this.openform=false;

  }
  hello(files:FileList){
    
    // let reader =new FileReader();
 
 
    
  }
public filee =[];
  readUrl(event:any,files:FileList) {
    this.upload=files.item(0);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
     
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        
        console.log(this.filee)

      }
      
      reader.readAsDataURL(event.target.files[0]);
      console.log(this.upload)
    }
  }


    
  }
  

