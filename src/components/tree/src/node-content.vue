<script lang="ts" setup>
import { h ,defineProps} from 'vue';

  const props = defineProps({
    data: {
      required: true
    },
    renderContent: Function,
    parentData: Array
  })

    const { data, renderContent, parentData } = props;
    
    renderContent ? renderContent(h, { data, parentData }) : h('span', data.label)
    


</script>


