function PluginJsDate_diff(){
  this.data = {
    success: true,
    date1: '2001-01-01', 
    date2: '2002-02-02', 
    diff: null,
    diff_days: null,
    diff_weeks: null,
    diff_months: null,
    diff_years: null
  }
  this.calc = function(){
    this.data.date1_typeof = (typeof this.data.date1);
    this.data.date1_parse = Date.parse(this.data.date1);
    this.data.date1_obj = new Date(this.data.date1);
    this.data.date1_year = this.data.date1_obj.getFullYear();
    this.data.date1_month = this.data.date1_obj.getMonth();
    this.data.date2_typeof = (typeof this.data.date2);
    this.data.date2_parse = Date.parse(this.data.date2);
    this.data.date2_obj = new Date(this.data.date2);
    this.data.date2_year = this.data.date2_obj.getFullYear();
    this.data.date2_month = this.data.date2_obj.getMonth();
    this.data.diff = this.data.date2_parse - this.data.date1_parse;
    /**
     * Days
     */
    this.data.diff_days = parseInt(this.data.diff/(24*3600*1000));
    /**
     * Weeks
     */
    this.data.diff_weeks = parseInt(this.data.diff/(24*3600*1000*7));
    /**
     * Months
     */
    this.data.diff_months = (this.data.date2_month+12*this.data.date2_year)-(this.data.date1_month+12*this.data.date1_year);
    /**
     * Years
     */
    this.data.diff_years = parseInt(this.data.diff/(24*3600*1000*365));
    /**
     * 
     */
    this.data.success = true;
    if(this.data.date1_obj=='Invalid Date' || this.data.date2_obj=='Invalid Date'){
      this.data.success = false;
    }
    /**
     * 
     */
    return this.data; 
  }
}
var PluginJsDate_diff = new PluginJsDate_diff();
//PluginJsDate_diff.data.date1 = '2001-01-01';
//PluginJsDate_diff.data.date2 = 'sdf';
//console.log(PluginJsDate_diff.calc());
