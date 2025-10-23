# scoutbaR 0.2.5

## Breaking change

- You can now pass icons as shiny tags (`icon("cogs")`) in `scout_action()`:

```r
# old
scout_action(
  id = 3,
  icon = "house",
  label = "3",
  description = "3"
)
# now
scout_action(
  id = 3,
  icon = icon("house"),
  label = "3",
  description = "3"
)
```

This allows to leverage other icon sets that fontawesome.

## Bug fix

- Fix issue with the upcoming release of `{testthat}` (mistakenly using `expect()` instead of `expect_length()`).

# scoutbaR 0.2.0

## New feature

- New input[[<SCOUTBAR_ID>-open]]: get the state of the scoutbar open status.

# scoutbaR 0.1.0

## Bug fix

- Reset input when clicking on an action. This allows observers to re-trigger even if the choice is the same.
- Reset search result when clicking on an action. Avoids to break the search bar.

# scoutbaR 0.0.1

- Initial release.
