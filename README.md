# About the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The widget is meant to be embedded on client’s websites during the Olympic
games. The widget shows up to 10 countries that have won the most medals of a
given kind in the Olympics games. It has the following requirements:

- It can accept up to two parameters:
  - element_id – an id of the element that the module will use as its
    container.
  - sort - determines the type of medals to sort by. It can have one of the
    following values: 'total', 'gold', 'silver' and 'bronze'.
- If no sort parameter is passed the sort should be by gold medals.
- When ranking by total medals, ties are broken by most gold.
- When ranking by gold, ties are broken by most silver.
- When ranking by silver, ties are broken by most gold.
- When ranking by bronze, ties are broken by most gold.
- Users can click the column headers to re-sort the countries by gold, silver,
  bronze, or total medals won. With each sort the possibility exists that new
  countries will enter and depart the top 10. The medals data should not be
  re-fetched from the server when sort changes.

## Initializing

```<div id="medal-widget"></div>
    <script src="./build/static/js/widget.js"></script>
    <script type="text/javascript" src="./medal-widget.js"></script>

    <script type="text/javascript">
      widget.initialize("medal-widget", "silver");
    </script>
```

Example can be seen in the [index.html](https://github.com/michpenn/medal-widget/blob/master/index.html) file.

Otherwise, you can see the app in action by running `npm start` and it will initialize in the dev environment, as seen in [./src/index.js](https://github.com/michpenn/medal-widget/blob/master/src/index.js)
