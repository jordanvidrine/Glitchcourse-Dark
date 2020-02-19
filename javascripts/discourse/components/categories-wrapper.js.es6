import Component from "@ember/component";
import EmberObject from "@ember/object";

export default Component.extend({
  tagName:"",
  init() {
    this._super(...arguments)

    // sort categories by top 7
    let categories = this.attrs.categories.value.content;
    categories = categories.sort((a,b) => b.post_count - a.post_count)

    this.setProperties({
      topCat: this.topCat(),
      other: this.cat(),
    })
  },
  topCat() {
    let { categories } = this.attrs;
    categories = categories.value.content
    return categories.slice(0,7)
  },
  cat() {
    let { categories } = this.attrs;
    categories = categories.value.content
    return categories.slice(7);
  },
});