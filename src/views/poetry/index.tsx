import { defineComponent } from "vue"

function getPoetry() {
  return window.poetry
}


export default defineComponent({
  name: 'poetry',
  render() {
    return (
      <div>
        poetry
        <input onClick={
          () => {
            console.log('a')
            console.log(`electronAPI is undefined ${getPoetry() == undefined}`)
            getPoetry()?.loadStatisticOf('quan_tang_shi')
          }
        }/>
      </div>
    ) 
  }
})