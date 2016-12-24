import React from 'react';

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Add Category Name to the state
  handleClick(e) {
    const category = this.props.category;
    const tag = this.props.tag;
    const index = category.indexOf(tag);
    console.log(e.target.value);
    if (index === -1) {
      this.props.selectCategory(tag);
    } else {
      this.props.removeCategory(tag);
    }
  }

  render() {
    const description = this.props.description;
    return (
      <li onClick={this.handleClick}>
        {description}
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
              <NavigationItem
                category={this.props.category}
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"All Items"}
                tag={"all"}
              />
              <NavigationItem 
                category={this.props.category}
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"Books"}
                tag={"books"}
              />
              <NavigationItem
                category={this.props.category} 
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"Clothing"}
                tag={"clothing"}
              />
              <NavigationItem 
                category={this.props.category}
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"Tech"}
                tag={"tech"}
              />
              <NavigationItem 
                category={this.props.category}
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"Gifts"}
                tag={"gifts"}
              />
              <NavigationItem 
                category={this.props.category}
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"Stationary"}
                tag={"stationary"}
              />
              <NavigationItem 
                category={this.props.category}
                selectCategory= {this.props.selectCategory} 
                removeCategory={this.props.removeCategory}
                description={"Supplies"}
                tag={"supplies"}
              />
          </ul>
      </div>
    );
  }
}

export default Navigation;