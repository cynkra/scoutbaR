test_that("scout action works", {
  action <- scout_action("id", "label", "descr")
  expect_type(action, "list")
  expect_length(action, 2)
  expect_true(all(names(action) %in% c("children", "class")))
  expect_identical(action$class, "scout_action")

  expect_type(action$children, "list")
  expect_identical(action$children$ariaLabel, "id")

  # Pass icons as shiny tags
  expect_snapshot(
    error = TRUE,
    {
      scout_action(
        id = 3,
        icon = "house",
        label = "3",
        description = "3"
      )
    }
  )
})

test_that("scout section works", {
  section <- scout_section(
    label = "label",
    scout_action("id", "label", "descr"),
    .list = unname(
      Map(scout_action, id = letters, label = letters, description = letters)
    )
  )

  expect_type(section, "list")
  expect_length(section, 3)
  expect_true(all(names(section) %in% c("children", "label", "class")))
  expect_identical(section$class, "scout_section")

  # length(letters) + 1
  expect_identical(length(section$children), 27L)
})

test_that("scout page works", {
  page <- scout_page(
    label = "label",
    scout_action("id", "label", "descr"),
    .list = unname(
      Map(scout_action, id = letters, label = letters, description = letters)
    )
  )

  expect_type(page, "list")
  expect_length(page, 3)
  expect_true(all(names(page) %in% c("children", "label", "class")))
  expect_identical(page$class, "scout_page")

  # length(letters) + 1
  expect_identical(length(page$children), 27L)
})

# Mock session
session <- as.environment(
  list(
    ns = identity,
    sendInputMessage = function(inputId, message) {
      session$lastInputMessage <- list(
        inputId = inputId,
        message = message
      )
    }
  )
)

test_that("update scoutbar works", {
  id <- "scoutbar"

  update_scoutbar(
    session = session,
    id,
    revealScoutbar = TRUE
  )

  res <- session$lastInputMessage
  expect_type(res, "list")
  expect_true(all(names(res) %in% c("inputId", "message")))
  expect_identical(res$inputId, id)
  expect_type(res$message, "list")
  expect_identical(res$message$configuration$id, id)
})

# shinytest2
library(shinytest2)

test_that("App initialization is consistent", {
  skip_on_cran()
  app <- AppDriver$new(
    system.file("examples/simple", package = "scoutbaR"),
    name = "simple"
  )

  app$expect_values()

  app$click("open")
  app$wait_for_idle()
  app$expect_values()

  app$click(selector = ".scoutbar-cell-item[aria-label=\"1\"]")
  app$wait_for_idle()
  app$expect_values()

  app$click("update")
  app$wait_for_idle()
  app$expect_values()

  app$click("open")
  app$wait_for_idle()
  app$expect_values()

  app$stop()
})
