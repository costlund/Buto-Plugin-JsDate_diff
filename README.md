# Buto-Plugin-JsDate_diff




## Include


```
type: widget
data:
  plugin: js/date_diff
  method: include
```


## Javascript

```
PluginJsDate_diff.data.date1 = '1967-06-22';
PluginJsDate_diff.data.date2 = new Date();
console.log(PluginJsDate_diff.calc());
```



Result

```
{
  "date1": "1967-06-22",
  "date2": "2019-02-01T09:07:50.940Z",
  "diff": 1628845670000,
  "diff_days": 18852,
  "diff_weeks": 2693,
  "diff_months": 620,
  "diff_years": 51,
  "date1_typeof": "string",
  "date1_parse": -79833600000,
  "date1_obj": "1967-06-22T00:00:00.000Z",
  "date1_year": 1967,
  "date1_month": 5,
  "date2_typeof": "object",
  "date2_parse": 1549012070000,
  "date2_obj": "2019-02-01T09:07:50.940Z",
  "date2_year": 2019,
  "date2_month": 1
}
```



