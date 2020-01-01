(function() {
    document.addEventListener('DOMContentLoaded', function() {
      var el, i, len, ref, showDetails;
      ref = document.getElementsByClassName('details');
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        el.style.display = 'none';
      }
      showDetails = function(el) {
        var detail, elDetailsId, j, len1, ref1;
        ref1 = document.getElementsByClassName('details');
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          detail = ref1[j];
          detail.style.display = 'none';
        }
        elDetailsId = el.target.id.replace(/about__/g, '');
        return document.getElementById(elDetailsId).style.display = '';
      };
      document.getElementById('about__name').addEventListener('click', showDetails);
      document.getElementById('about__location').addEventListener('click', showDetails);
      return document.getElementById('about__activity').addEventListener('click', showDetails);
    });
  
  }).call(this);