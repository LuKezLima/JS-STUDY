function isPossible(a, b, c, d) {


   let aux = 1;
   while (a < c || b < d) {

      if(a == c && b == d){
       console.log("yes");
          
      }
      else{
         aux = 1
         console.log("no");
         
      }

         a += b
         b += a
         
   }
  


}

isPossible(1,2,3,6)
