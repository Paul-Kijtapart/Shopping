import React from 'react';

class NavigationCategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Add Category Name to the state
  handleClick(e) {
    const tag = this.props.tag;
    if (tag === 'all') {
      this.props.clearCategory();
      return;
    }

    const category = this.props.category;
    const index = category.indexOf(tag);

    if (index === -1) {
      this.props.addTagToCategory(tag);
    } else {
      this.props.removeTagFromCategory(tag);
    }
  }

  render() {
    const tag = this.props.tag;
    const category = this.props.category;
    const index = category.indexOf(tag); 

    const description = this.props.description;
    return (
      <li className={index > -1? "navigationCategoryItemOn" : "navigationCategoryItemOff"} onClick={this.handleClick}>
        {description}
      </li>
    );
  }
}

class NavigationPriceItem extends React.Component {

  handleClick(e) {
    const priceRanges = this.props.priceRanges;
    const range = [this.props.minPrice, this.props.maxPrice];
    const index = this.props.containPriceRange(priceRanges, range);
    if (index > -1) {
      this.props.removePriceRanges(range);
    } else {
      this.props.addPriceRanges(range);
    }
  }

  render() {
    const minPrice = this.props.minPrice;
    const maxPrice = this.props.maxPrice;
    const priceRanges = this.props.priceRanges;
    const range = [minPrice, maxPrice];
    const index = this.props.containPriceRange(priceRanges, range);

    return (
      <li className={index > -1? "navigationPriceItemOn" : "navigationPriceItemOff"} onClick={this.handleClick.bind(this)}>
        ${minPrice} - ${maxPrice}
      </li>
    );
  }
}

// ShoppingApp > MainContent > Navigation
class Navigation extends React.Component {
  render() {
    return (
      <div id="navigationMenu">
          <ul>
              <li className="navigationType"> Category </li>
              <NavigationCategoryItem
                category={this.props.category}
                clearCategory={this.props.clearCategory}
                description={"All Items"}
                tag={"all"}
              />
              <NavigationCategoryItem 
                category={this.props.category}
                addTagToCategory= {this.props.addTagToCategory} 
                removeTagFromCategory={this.props.removeTagFromCategory}
                description={"Books"}
                tag={"books"}
              />
              <NavigationCategoryItem
                category={this.props.category} 
                addTagToCategory= {this.props.addTagToCategory} 
                removeTagFromCategory={this.props.removeTagFromCategory}
                description={"Clothing"}
                tag={"clothing"}
              />
              <NavigationCategoryItem 
                category={this.props.category}
                addTagToCategory= {this.props.addTagToCategory} 
                removeTagFromCategory={this.props.removeTagFromCategory}
                description={"Tech"}
                tag={"tech"}
              />
              <NavigationCategoryItem 
                category={this.props.category}
                addTagToCategory= {this.props.addTagToCategory} 
                removeTagFromCategory={this.props.removeTagFromCategory}
                description={"Gifts"}
                tag={"gifts"}
              />
              <NavigationCategoryItem 
                category={this.props.category}
                addTagToCategory= {this.props.addTagToCategory} 
                removeTagFromCategory={this.props.removeTagFromCategory}
                description={"Stationary"}
                tag={"stationary"}
              />
              <NavigationCategoryItem 
                category={this.props.category}
                addTagToCategory= {this.props.addTagToCategory} 
                removeTagFromCategory={this.props.removeTagFromCategory}
                description={"Supplies"}
                tag={"supplies"}
              />
              <li className="navigationType"> Price </li>
              <NavigationPriceItem
                minPrice={10}
                maxPrice={49.99}
                priceRanges={this.props.priceRanges}
                addPriceRanges={this.props.addPriceRanges}
                removePriceRanges={this.props.removePriceRanges}
                clearPriceRanges={this.props.clearPriceRanges}
                containPriceRange={this.props.containPriceRange}
              />
              <NavigationPriceItem
                minPrice={50}
                maxPrice={99.99}
                priceRanges={this.props.priceRanges}
                addPriceRanges={this.props.addPriceRanges}
                removePriceRanges={this.props.removePriceRanges}
                clearPriceRanges={this.props.clearPriceRanges}
                containPriceRange={this.props.containPriceRange}
              />
              <NavigationPriceItem
                minPrice={100}
                maxPrice={199.99}
                priceRanges={this.props.priceRanges}
                addPriceRanges={this.props.addPriceRanges}
                removePriceRanges={this.props.removePriceRanges}
                clearPriceRanges={this.props.clearPriceRanges}
                containPriceRange={this.props.containPriceRange}  
              />
              <NavigationPriceItem
                minPrice={200}
                maxPrice={299.99}
                priceRanges={this.props.priceRanges}
                addPriceRanges={this.props.addPriceRanges}
                removePriceRanges={this.props.removePriceRanges}
                clearPriceRanges={this.props.clearPriceRanges}
                containPriceRange={this.props.containPriceRange}
              />
              <NavigationPriceItem
                minPrice={300}
                maxPrice={399.99}
                priceRanges={this.props.priceRanges}
                addPriceRanges={this.props.addPriceRanges}
                removePriceRanges={this.props.removePriceRanges}
                clearPriceRanges={this.props.clearPriceRanges}
                containPriceRange={this.props.containPriceRange}
              />
              <NavigationPriceItem
                minPrice={400}
                maxPrice={499.99}
                priceRanges={this.props.priceRanges}
                addPriceRanges={this.props.addPriceRanges}
                removePriceRanges={this.props.removePriceRanges}
                clearPriceRanges={this.props.clearPriceRanges}
                containPriceRange={this.props.containPriceRange}
              />
          </ul>
      </div>
    );
  }
}

export default Navigation;