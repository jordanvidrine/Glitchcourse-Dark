import Component from "@ember/component";
import EmberObject from "@ember/object";

export default Component.extend({
  tagName:"",
  init() {
    this._super(...arguments)

    // sort categories by top 7
    if (settings.sort_popular_categories) {
      let categories = this.attrs.categories.value.content;
      categories = categories.sort((a,b) => b.post_count - a.post_count)
    }

    this.setProperties({
      topCat: this.topCat(),
      other: this.cat(),
      topIsSelected: this.topIsSelected()
    })

  },
  topIsSelected() {
    if (settings.sort_popular_categories) {
      return true;
    } else {
      return false;
    }
  },
  topCat() {
    let catCount = settings.top_category_count;
    let { categories } = this.attrs;
    categories = categories.value.content
    return categories.slice(0,catCount)
  },
  cat() {
    let catCount = settings.top_category_count;
    let { categories } = this.attrs;
    categories = categories.value.content
    if (categories.slice(catCount).length === 0) return false;
    return categories.slice(catCount);
  },
});