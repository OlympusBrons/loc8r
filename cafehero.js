{
  name: "Cafe Hero",
  id: ObjectId(),
  address: "125 High Street, Reading, RG6 1PS",
  rating: 3,
  facilities: ["Hot Drinks", "Food", "Premium wifi"],
  coords: [-0.9690884, 51.455041],
  openingTimes: [
    {
      days: "Monday - Friday",
      opening: "5:30am",
      closing: "9:00am",
      closed: false
    },
    {
      days: "Saturday - Sunday",
      opening: "6:00am",
      closing: "9:00pm",
      closed: false
    }
  ],
  reviews: [
    {
      author: "Brandon Mitchell"
      id: ObjectId(),
      rating: 1,
      content: "What a terrible, terrible, terrible place....",
      createdOn: new Date("Apr 3, 2016")
    },
    {
      author: "Sherlock Holmes",
      id: ObjectId(),
      rating: 1,
      content: "What he said.  ^",
      createdOn: new Date("Apr 4, 2016")
    }
  ]
}
