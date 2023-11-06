import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'
import SvgVue from 'svg-vue3';

Nova.booting((app, store) => {
  app.component('index-MimeTypeAssetField', IndexField)
  app.component('detail-MimeTypeAssetField', DetailField)
  app.component('form-MimeTypeAssetField', FormField)
  app.use(SvgVue);
})
