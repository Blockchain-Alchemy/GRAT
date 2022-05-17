// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_1008053";
    item['en'] = "by Blockchain Alchemy";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_navbar_129938";
    item['en'] = "Start";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_126915";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_381305";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_409820";
    item['en'] = "Contract Control Panel";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_507408";
    item['en'] = "Convert";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_buttoncopy_551756";
    item['en'] = "Save";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_buttoncopy2_87726";
    item['en'] = "Compile";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_buttoncopy3_115937";
    item['en'] = "Deploy";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textarea_355883";
    item['en'] = "CONSOLE LOGS ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text3_827187";
    item['en'] = "You have 10 Free Deploys Remaining. ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text4_191157";
    item['en'] = "Ideas";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text5_915934";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text5_406684";
    item['en'] = "Count";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textcopy_669088";
    item['en'] = "Mint";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textcopy2_116742";
    item['en'] = "More";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text6_838027";
    item['en'] = "Count";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textcopy3_800981";
    item['en'] = "The count contract increments the storge by one.";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_886140";
    item['en'] = "ideas";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_buttoncopy4_406108";
    item['en'] = "Tutorial";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text7_906950";
    item['en'] = "GRAT is a fully featured IDE that lets you make Tezos Smart Contracts using visual blocks. ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_buttoncopy5_463752";
    item['en'] = "the mission";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
