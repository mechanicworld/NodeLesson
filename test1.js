class Job {
    constructor(customer) {
      this.customer = customer;
      this.calculateFee = function () {
        console.log("calculate price"); //Add price logic
      };
    }
    Simple(customer) {
      this.calculateFee(customer);
    }
    Pro(customer) {
      this.calculateFee(customer);
      console.log("Add pro services"); //additional functionalities
    }
  }
  
  
  
  const a = new Job("Francesco");
  a.Simple(); 
  //Output:
  //calculate price
  
  
  a.Pro();
  //Output: 
  //calculate price 
  //Add pro services...