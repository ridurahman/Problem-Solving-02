function maximizeProfit(prices){
    if (prices.length < 1 || prices.length > 105) {
        return "Enter array of length 1 to 105";
      } else {
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < 0 || prices[i] > 104) {
              return "Enter array of prices between 0 to 104";
            }
          }
    let minPrice = prices[0];
    let minPriceIndex = 0;
    for(let i=1;i<prices.length;i++){
        if(minPrice > prices[i]){
            minPrice = prices[i];
            minPriceIndex = i;
        }
    }
    let maxPriceAfterBuy = minPrice;
    for(let i=minPriceIndex;i<prices.length;i++){
        if(maxPriceAfterBuy < prices[i]){
            maxPriceAfterBuy = prices[i];
        }
    }
    return maxPriceAfterBuy - minPrice;
}
}

console.log(maximizeProfit([7,1,5,3,6,4]));
console.log(maximizeProfit([7,6,4,3,1]));

// Time Complexity O(n)
// Space Complexity O(1)