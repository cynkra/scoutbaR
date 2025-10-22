library(scoutbaR)
library(shiny)
library(bslib)

ui <- page_fillable(
  title = "Penguins dashboard",
  layout_sidebar(
    sidebar = sidebar(
      phosphoricons::html_dependency_phosphor(),
      input_dark_mode(id = "theme", mode = "dark"),
      actionButton("open", "Open", icon = icon("house")),
      actionButton("update", "Update actions", icon = icon("rocket")),
      scoutbar(
        "scoutbar",
        showRecentSearch = TRUE,
        actions = list(
          scout_section(
            label = "Section 1",
            scout_action(
              id = 1,
              icon = phosphoricons::ph_i("house"),
              label = "1",
              description = "1"
            ),
            scout_action(
              id = 2,
              icon = icon("gear"),
              label = "2",
              description = "2"
            )
          ),
          scout_section(
            label = "Section 2",
            scout_page(
              label = "Page 1",
              scout_action(
                id = 3,
                icon = icon("house"),
                label = "3",
                description = "3"
              ),
              scout_action(
                id = 4,
                icon = icon("gear"),
                label = "4",
                description = "4"
              )
            ),
            scout_action(
              id = 5,
              icon = icon("gear"),
              label = "5",
              description = "5"
            )
          )
        )
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
        id = i + 5,
        icon = icon("house"),
        label = paste("New", i),
        description = paste("New description", i)
      )
    })

    new_actions <- list(
      input[["scoutbar-configuration"]]$actions[[1]],
      actions_lst
    )

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
