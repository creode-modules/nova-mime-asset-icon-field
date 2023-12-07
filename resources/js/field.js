import IndexField from './components/IndexField.vue'
import DetailField from './components/DetailField.vue'
import FormField from './components/FormField.vue'

Nova.booting((app, store) => {
  app.component('index-MimeTypeAssetField', IndexField)
  app.component('detail-MimeTypeAssetField', DetailField)
  app.component('form-MimeTypeAssetField', FormField)
})
