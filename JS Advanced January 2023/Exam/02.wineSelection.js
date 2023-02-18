class WineSelection {
    constructor(space) {
      this.space = space,
      this.wines = [],
      this.bill = 0
    }
  
    reserveABottle(wineName, wineType, price) {
      if (this.space <= 0) {
        throw new Error("Not enough space in the cellar.")
      }
      this.space--
      const newWine = {
        wineName: wineName,
        wineType: wineType,
        price: price, 
        paid: false,
      }; 
      this.wines.push(newWine);
      return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
  
    payWineBottle(wineName, price) {
      const index = this.wines.findIndex((wine) => wine.wineName == wineName)
      if (index === -1) {
        throw new Error(`${wineName} is not in the cellar.`)
      }
      if (this.wines[index].paid) {
        throw new Error(`${wineName} has already been paid.`)
      }
      this.wines[index].paid = true
      this.bill += price
      return `You bought a ${wineName} for a ${price}$.`
    }
  
    openBottle(wineName) {
      const index = this.wines.findIndex((wine) => wine.wineName === wineName)
      if (index === -1) {
        throw new Error(`The wine, you're looking for, is not found.`)
      }
      if (!this.wines[index].paid) {
        throw new Error(`${wineName} need to be paid before open the bottle.`)
      }
      this.wines.splice(index, 1)
      return `You drank a bottle of ${wineName}.`
    }
  
    cellarRevision(wineType) {
      let winesToDisplay = this.wines
      if (wineType) {
        winesToDisplay = this.wines.filter((wine) => wine.wineType === wineType)
        if (winesToDisplay.length === 0) {
          throw new Error(`There is no ${wineType} in the cellar.`)
        }
      }
  
      const emptySlots = this.space
      let res = `You have space for ${emptySlots} bottles more.\n`
      res += `You paid ${this.bill}$ for the wine.\n`
      const sortedWines = winesToDisplay.sort((a, b) =>
        a.wineName.localeCompare(b.wineName)
      )
      sortedWines.forEach((wine) => {
        res += `${wine.wineName} > ${wine.wineType} - ${
          wine.paid ? "Paid" : "Not Paid"
        }.\n`
      })
      return res.trim()
    }
  }

  const selection = new WineSelection(2)

  selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
  
  selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
  
  selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
  
  console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
  
  console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));