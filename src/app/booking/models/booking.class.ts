import { IBooking } from "./booking.model";

export class BookingClass {

     public id:string;
     public user:string;
     public parc:string;
     public bookingdate:string;
     public comments:string;
     
     constructor(bookingObj?: IBooking) {
          this.id = bookingObj?.id || "";
          this.bookingdate = bookingObj?.bookingdate || "";
          this.comments = bookingObj?.comments || "";
          this.parc = bookingObj?.parc || "";
          this.user = bookingObj?.user || "";
     }

     // method used to extract user name to display in booking table when data is available
     private _translateUser(bookingUser: string = "", users: any[]): string {
          if(bookingUser == "") return "";

          let user: any = users.filter((user:any)=>user.id == bookingUser);

          return user.name;
     }
     
}
