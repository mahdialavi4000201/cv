exports.ids = [6];
exports.modules = {

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3ebe15d8", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_style_index_0_id_72be8763_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_style_index_0_id_72be8763_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_style_index_0_id_72be8763_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_style_index_0_id_72be8763_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_style_index_0_id_72be8763_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary-color[data-v-72be8763]{background-color:#00796b}.secondary-color[data-v-72be8763]{background-color:#ff5722}.timeline-container[data-v-72be8763]{display:flex;justify-content:center;padding:2rem 0}.timeline[data-v-72be8763]{border-left:3px solid #b0bec5;padding-left:2rem;position:relative}.timeline-item[data-v-72be8763]{margin-bottom:3rem;position:relative}.timeline-dot[data-v-72be8763]{border:3px solid #fff;border-radius:50%;height:20px;left:-10px;position:absolute;top:0;width:20px;z-index:10}.timeline-date[data-v-72be8763]{color:#757575;font-size:.9rem;left:-150px;position:absolute;top:0}.timeline-content[data-v-72be8763]{background-color:#e0f2f1;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:1rem}.job-title[data-v-72be8763]{color:#00796b;font-size:1.5rem;font-weight:700;margin:0}.job-company[data-v-72be8763]{color:#607d8b;font-size:1.2rem;margin:0}.job-description ul[data-v-72be8763]{margin:0;padding-left:1rem}.job-description li[data-v-72be8763]{margin-bottom:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TimeLine.vue?vue&type=template&id=72be8763&scoped=true


var TimeLinevue_type_template_id_72be8763_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "timeline-container"
  }, [_c('div', {
    staticClass: "timeline"
  }, _vm._l(_vm.jobs, function (job, index) {
    return _c('div', {
      key: index,
      staticClass: "timeline-item"
    }, [_c('div', {
      class: ['timeline-dot', index % 2 === 0 ? 'primary-color' : 'secondary-color']
    }), _vm._v(" "), _c('div', {
      staticClass: "timeline-date"
    }, [_vm._v(_vm._s(job.duration))]), _vm._v(" "), _c('div', {
      staticClass: "timeline-content"
    }, [_c('h3', {
      staticClass: "job-title"
    }, [_vm._v(_vm._s(job.title))]), _vm._v(" "), _c('h4', {
      staticClass: "job-company"
    }, [_vm._v(_vm._s(job.company))]), _vm._v(" "), _c('p', {
      staticClass: "job-description"
    }, [_c('ul', _vm._l(job.tasks, function (task, i) {
      return _c('li', {
        key: i
      }, [_vm._v(_vm._s(task))]);
    }), 0)])])]);
  }), 0)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TimeLine.vue?vue&type=template&id=72be8763&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TimeLine.vue?vue&type=script&lang=js
/* harmony default export */ var TimeLinevue_type_script_lang_js = ({
  data() {
    return {
      jobs: [{
        title: 'Senior Developer',
        company: 'Tech Corp',
        duration: 'Jan 2021 - Present',
        tasks: ['Lead the development team.', 'Architect and implement solutions.', 'Collaborate with designers and stakeholders.']
      }, {
        title: 'Frontend Developer',
        company: 'Web Solutions Inc.',
        duration: 'Jun 2018 - Dec 2020',
        tasks: ['Developed user-friendly interfaces.', 'Worked on performance optimization.', 'Contributed to UI/UX design discussions.']
      }, {
        title: 'Junior Developer',
        company: 'Startup Co.',
        duration: 'Jan 2016 - May 2018',
        tasks: ['Assisted in building and testing features.', 'Participated in code reviews.', 'Maintained documentation.']
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/TimeLine.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TimeLinevue_type_script_lang_js = (TimeLinevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/TimeLine.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TimeLinevue_type_script_lang_js,
  TimeLinevue_type_template_id_72be8763_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "72be8763",
  "72ce6e2a"
  
)

/* harmony default export */ var TimeLine = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=time-line.js.map