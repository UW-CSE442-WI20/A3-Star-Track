For this assignment, we chose the data from NASA about meteorite landings around the world. And we focused on showing the meteorites layout with respect to year. 

In order to give viewers a sense of real life, we chose to show the data points on a world map where information about each meteorite is placed at their falling location according to the given geographical location (latitude and longitude). Because of the large amount of data (around 50k data points), it is infeasible to display the detailed information about each meteorite at the same time. Therefore, we decided to represent each meteorite as a dot on the map, and the details of each dot will pop up when the user select it. We also chose a dark-mode map instead of the normal map we use for navigation in order to magnify the existence of meteorites, so the street/landscape details are obscured from our visualization. 
The color and size of each dot corresponds to the meteorites’ mass and class. We chose red, yellow, blue and light purple to represent the four main categories of meteorites, because these colors contrast with each other and our dark background, which can effectively draw views’ attention. 

As mentioned above, we allow users to select data points on the map to view the details of each meteorite. Originally, we were planning to show the details when users hover over a point. Then we realize that this might lead to confusion due to the mass amount of data points. Users might intend to select one point but mistakenly select another point. Thus, we decide not to show the pop-up until users click on one dot. This resolves the confusion because clicking is a more intended behavior. 

To make the visualization neater, we put three filters on the data, so that the total number of data points shown on the map at one time is largely limited and views can see each point more clearly. 
Filters were originally implemented as drop down menus in our visualization, this not only eliminates ineffective use brought by invalid input but also gives users a hint on what kind of filters they are able to choose. 
Then we realize that this doesn’t effectively show the change over time because users have to reselect year every time to see the different years. So, we switched to a slide bar which allow users to drag along. In this way, users can view the trend using the bar. 

Borui(Alex) Zhang (12h): implemented the interaction features and the display of the points
Yifan Bai (12h): filtered the data according to year, implemented the sliding bar
Yongzhi(Angie) Li (12h): implemented the map interface where data points are displayed
Yunyu(Bella) Bai (12h): assisted visualization development, documented the development process and meeting notes
The overall process can be summarized as the following major steps. 
a)	Implemented the map interface where data is displayed. 
b)	Implemented the drop-down menu which allows user to choose the data that they want to view
c)	Filter the data according to user input
d)	Display the data points as dots on the map
e)	Show detailed information as pop-ups when users click on a dot
