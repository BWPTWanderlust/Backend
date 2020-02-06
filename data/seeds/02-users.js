
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { id: 1, name:"Willy Wonka" , username:"willy",org:0,password:"",email:"will@wander.com",bio:"Come with me and you'll see a land of pure imagination."},
          { id: 2, name:"Tom Arnold" , username:"irrelevant",org:0,password:"",email:"tom@wander.com",bio:"Lorem ipsum."},
          { id: 3, name:"Clark kent" , username:"superman",org:0,password:"$2a$10$YIcoq1kEQ/SAiQYAg7s0peGBBfD24eADoy6O8h2HKBrGUdGPXbE0m",email:"clark@wander.com",bio:"Cheese on toast queso cauliflower cheese. Cheese and wine cut the cheese st."},
          { id: 4, name:"Tony Stark" , username:"ironman",org:0,password:"",email:"tony@wander.com",bio:"Jarlsberg halloumi cheesecake cheese triangles smelly cheese fondue port-salut when the cheese comes out everybody's happy."},
          { id: 5, name:"Steve Rogers" , username:"captain",org:0,password:"",email:"steve@wander.com",bio:"Red leicester who moved my cheese smelly cheese stilton brie macaroni cheese monterey jack everyone loves. Pepper jack."},
          { id: 6, name:"Pepper Potts" , username:"potts",org:0,password:"",email:"pepper@wander.com",bio:"Everyone loves halloumi hard cheese. Dolcelatte dolcelatte melted cheese cheesy grin emmental fromage cheesecake cheddar."},
          { id: 7, name:"Peter Parker" , username:"spiderman",org:0,password:"",email:"peter@wander.com",bio:"Macaroni cheese manchego feta. Chalk and cheese caerphilly cheesy feet brie camembert de normandie dolcelatte pecorino manchego. "},
        ])
      })
          
  };
  
  
  
  
  