<template>
  <div class="school">
<!--     <pre>{{ $data | json }}</pre> -->
    <ul id="nav-mobile" class="side-nav fixed float" v-scroll="onScroll">
      <li>
        <div class="userView">
          <img src="../assets/img/office.jpg" class="background"/>
          <a href="#!user">
            <img src="../assets/img/yuna.jpg" class="circle"/>
          </a>
          <a href="#!name"><span class="white-text name">MI ESCUELA</span></a>
          <a href="#!email"><span class="white-text email">Bienvenidos</span></a>
        </div>
      </li>
      <div class="card"
           v-for="school in schools">
          <div class="card-content">
            <span class="card-title">{{ school.name }}</span>
            <p><i class="tiny material-icons purple-text text-darken-3">location_on</i>{{ school.full_address }}</p>
            <div class="chip" v-for="turn in levels(school)">{{ turn }}</div>
            <star-rating value="4" :disabled="true">
            </star-rating>
          </div>
            <div class="card-action more-info">
              <button href="!#"
                      class="btn purple darken-3" 
                 v-on:click.prevent="centerSchool(school, $event)">Ver más</button>
            </div>
      </div>
    </ul>      
  </div>
    
</template>

<script>

export default {

  props: {
    schools: {
      type: Array,
      required: true,
      twoWay: true
    },
    center: {
      type: Object,
      required: true, 
      twoWay: true
    },
    zoom: {
      type: Number,
      required: true
    },
    loadMore: {
        type: Function,
        required: false,
        twoWay: true,
        default: function() {
          console.log('más');
        }
    }
  },
  data: function() {
    return {
      class: {
        active: false
      },
      busy: false,
      position: {scrollTop: 0, scrollLeft: 0}
    };
  },
  ready: function() {
  
  },
  methods: {
    colorByLevel(details) {

      var colors = [];

      details.forEach(function(detail, index) {
        switch(detail.level)
        {
          case 'PREESCOLAR': colors.push('purple'); break;
          case 'PRIMARIA': colors.push('purple darken-1'); break;
          case 'SECUNDARIA': colors.push('purple darken-2'); break;
          case 'BACHILLERATO': colors.push('purple darken-3'); break;
          case 'PROFESIONAL TECNICO': colors.push('purple darken-4'); break;
        } 
      });

      colors = colors.filter(function(color, index) {
        return colors.indexOf(color) == index;
      });

      return colors.length == 1 ? colors[0] : 'black';
    },
    centerSchool(school, event) {
      this.center = school.position;
      this.zoom = 16;
    },
    levels(school) {
      var levels = [];
      
      if(school.details !== 'undefined')
      {
        school.details.data.forEach(function(detail, index) {
              levels.push(detail.level);
            });

        levels = levels.filter(function(level, index) {
              return levels.indexOf(level) == index;
            });   

      }

      return levels;
    },
    onScroll(e, position) {

      this.position = position;
      
      var scrollTop = position.scrollTop + $('#nav-mobile li').outerHeight() + $('#nav-mobile .card').outerHeight() + 430;

      if(scrollTop >= (document.getElementById("nav-mobile").scrollHeight))
      {
        console.log("cargar más datos");
        this.loadMore();
      }

    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav-mobile {
    transform: translateX(0%);
  }
  .btn {
    width: 100%;
  }
</style>
