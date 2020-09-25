$("#address").suggestions({
  token: "beda792f11bd95b0291918c4ff102d578bc855ee",
  type: "ADDRESS",
  onSelect: function(suggestion) {
    console.log(suggestion);
  }
});