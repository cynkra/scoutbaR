library(scoutbaR)
library(shiny)
library(bslib)

ui <- page_fillable(
  title = "Penguins dashboard",
  layout_sidebar(
    sidebar = sidebar(
      input_dark_mode(id = "theme", mode = "dark"),
      actionButton("open", "Open", icon = icon("house")),
      actionButton("update", "Update actions", icon = icon("rocket")),
      scoutbar(
        "scoutbar",
        showRecentSearch = TRUE,
        actions = list()
      ),
      textOutput("textOutput"),
      textOutput("current_tab")
    ),
    "Body"
  )
)

server <- function(input, output, session) {
  observeEvent(
    input[["scoutbar-open"]],
    {
      print(input[["scoutbar-open"]])
    }
  )

  observeEvent(input$open, {
    update_scoutbar(session, "scoutbar", revealScoutbar = TRUE)
  })

  observeEvent(input$theme, {
    update_scoutbar(session, "scoutbar", theme = input$theme)
  })

  # TBD: at some point it would be nice to be able
  # to only update a subset of the actions
  observeEvent(input$update, {
    actions_lst <- lapply(1:5, function(i) {
      scout_action(
        id = i,
        icon = phosphoricons::ph_i("cake", size = "xl"),
        label = paste("New", i),
        description = paste("New description", i)
      )
    })

    update_scoutbar(
      session,
      "scoutbar",
      actions = actions_lst
    )
  })

  output$textOutput <- renderText({
    sprintf("You entered: %s", input$scoutbar)
  })
}

shinyApp(ui, server)
