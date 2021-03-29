import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';




@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss'],



})
export class MongoComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {}
  item=[
    {id:1,name:"Rihanna",img:"https://i.guim.co.uk/img/media/fc3aa6c9fe4cb005b216d70d206c2d89ae713376/0_197_3000_1800/master/3000.jpg?width=1020&quality=85&auto=format&fit=max&s=9443127c22c40858809e487948f5710a",desc:"Robyn Rihanna Fenty  (born February 20, 1988) is a Barbadian singer and songwriter. Born in Saint Michael and raised in Bridgetown, she first entered the music industry by recording demo tapes under the direction of record producer Evan Rogers in 2003"},
    {id:2,name:"Adele",img:"https://media1.s-nbcnews.com/j/newscms/2020_38/3412924/200917-gordy-quist-jm-1922_0ed1c480ffcf6094790b69bd1c226a00.fit-2000w.jpg",desc:"Adele Laurie Blue Adkins (born 5 May 1988) is an English singer-songwriter. Graduating from the BRIT School for Performing Arts and Technology in 2006, Adele was given a recording contract by XL Recordings after a friend posted her demo on Myspace the same year"},
    {id:3,name:"Beyonce",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEYu6Gbj4fXGc4GsQzKHjPCusGsiZZ0mopA&usqp=CAU",desc:"Beyonce Giselle Knowles-Carter (born September 4, 1981) is an American singer, songwriter, record producer and actress. Born and raised in Houston, Texas, she performed in various singing and dancing competitions as a child and rose to fame in the late 1990s as lead singer of R&B girl-group Destiny’s Child"},
    {id:4,name:"Taylor Swift",img:"https://images.indulgexpress.com/uploads/user/imagelibrary/2021/3/4/original/Pranati_Khanna.jpeg",desc:"Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention."},
    {id:5,name:"Justin Bieber",img:"https://static.dw.com/image/19276920_303.jpg",desc:"Justin Drew Bieber (born March 1, 1994) is a Canadian singer and songwriter. After a talent manager discovered him through his YouTube videos covering songs in 2008 and signed to RBMG, Bieber released his debut EP, My World, in late 2009"},
    {id:6,name:"Lady Gaga",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQn-q7cB-jHclwGD6IvsqTdEIzAUl4nXf-Q&usqp=CAU",desc:"Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer, songwriter, and actress"}
  ];

  player(val): void {
      // Create our query parameters object
      const queryParams: any = {};

      queryParams.myArray = JSON.stringify(val);

      // Create our 'NaviationExtras' object which is expected by the Angular Router
      const navigationExtras: NavigationExtras = {
        queryParams
      };

      // Navigate to component B
      this.router.navigate(["/deepr-songs/player"], navigationExtras);
    }
  }

