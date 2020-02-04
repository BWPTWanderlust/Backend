
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('organizer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('organizer').insert([
        { id: 1, name:"Janelle Whitley" , username:"janelle",org:1,password:1234,email:"janellewhitley@enaut.com",bio:"Come with me and you'll see a land of pure imagination."},
        { id: 2, name:"Norman Cobb" , username:"norman",org:1,password:1234,email:"norman@wander.com",bio:"Lorem ipsum."},
        { id: 3, name:"Suarez Berg" , username:"berg",org:1,password:1234,email:"berg@wander.com",bio:"Cheese on toast queso cauliflower cheese. Cheese and wine cut the cheese st."},
        { id: 4, name:"Green Pickett" , username:"green",org:1,password:1234,email:"green@wander.com",bio:"Jarlsberg halloumi cheesecake cheese triangles smelly cheese fondue port-salut when the cheese comes out everybody's happy."},
        { id: 5, name:"Clay Rich" , username:"clay",org:1,password:1234,email:"clay@wander.com",bio:"Red leicester who moved my cheese smelly cheese stilton brie macaroni cheese monterey jack everyone loves. Pepper jack."},
        { id: 6, name:"Mills Dorsey" , username:"mill",org:1,password:1234,email:"mills@wander.com",bio:"Everyone loves halloumi hard cheese. Dolcelatte dolcelatte melted cheese cheesy grin emmental fromage cheesecake cheddar."},
        { id: 7, name:"Valdez Owens" , username:"val",org:1,password:1234,email:"val@wander.com",bio:"Macaroni cheese manchego feta. Chalk and cheese caerphilly cheesy feet brie camembert de normandie dolcelatte pecorino manchego. "},
      ])
    })
        
};




