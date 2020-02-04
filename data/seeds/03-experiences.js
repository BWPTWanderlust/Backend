
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('experience').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('experience').insert([
            { id: 1, location:"atlanta, georgia", title:'Southern Trek',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"backpacking",imgurl:"https://picsum.photos/200",duration:"12 hours",organizer_id:1},
            { id: 2, location:"kansas city, Missouri", title:'Sky Dive Now',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"backpacking",imgurl:"https://picsum.photos/200",duration:"12 hours",organizer_id:2},
            { id: 3, location:"New York, New York", title:'Lorem Ipsum',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"backpacking",imgurl:"https://picsum.photos/200",duration:"12 hours",organizer_id:3},
            { id: 4, location:"Houston, Texas", title:'Dry and Hot',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"backpacking",imgurl:"https://picsum.photos/200",duration:"12 hours",organizer_id:4},
            { id: 5, location:"Austin, Texas", title:'Music Festival',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"backpacking",imgurl:"https://picsum.photos/200",duration:"12 hours",organizer_id:5},
            { id: 6, location:"Jacksonville, Florida", title:'Find Some Gold',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"kayaking",imgurl:"https://picsum.photos/200",duration:"5 hours",organizer_id:6},
            { id: 7, location:"Hollywood, California", title:'Surfs Up',description:"backpacking through the woods",lat: 27.64891,long:-81.550255,private:0,type:"Surfing",imgurl:"https://picsum.photos/200",duration:"3 hours",organizer_id:7},
          
        ])
      })
          
  };
  
  
  
  
  