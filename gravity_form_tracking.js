<script>
jQuery(document).ready( function() {
jQuery(document).bind('strattic-form-success', function(e){
  var formId = e.detail.form.id
  var formDetails = e.detail.formattedData
	window.dataLayer.push({
          'event' : 'gravityFormSubmission',
          'gfformID' : formId,
          'gfformSubmission' : formDetails
	});
});
	})
</script>
