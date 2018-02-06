const apiUrl = 'http://localhost:8000/api/v1/blogs';

(function ($) {
  $(function () {

    $('.button-collapse').sideNav();

  });
})(jQuery);

function AppViewModel() {
  const self = this;
  self.title = ko.observable();
  self.loader = ko.observable();
  self.loader('<div class="preloader-wrapper big active"><div class="spinner-layer spinner-red-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>');

}

ko.applyBindings(new AppViewModel());
