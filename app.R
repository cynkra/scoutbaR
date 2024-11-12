library(shiny)
library(bslib)
library(blockr)

my_stack <- new_stack()

ui <- page_fluid(
  title = "Penguins dashboard",
  layout_sidebar(
    sidebar = sidebar(
      input_dark_mode(id = "theme"),
      actionButton("update", "Update", icon = icon("house")),
      cmdkInput(
        "cmdk",
        actions = list(
          scout_section(
            label = "Section 1",
            scout_action(
              id = 1,
              icon = "house",
              label = "1",
              description = "1"
            ),
            scout_action(
              id = 2,
              icon = "gear",
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
                icon = "house",
                label = "3",
                description = "3"
              ),
              scout_action(
                id = 4,
                icon = "gear",
                label = "4",
                description = "4"
              )
            ),
            scout_action(
              id = 5,
                icon = "gear",
                label = "5",
                description = "5"
            )
          )
        )
      ),
      textOutput("textOutput"),
      textOutput("current_tab")
    ),
    generate_ui(my_stack, "stack")
  )
)

server <- function(input, output, session) {

  observeEvent(input$update, {
    updateCmdkInput(session, "cmdk", list(revealScoutbar = TRUE))
  })

  observeEvent(input$theme, {
    updateCmdkInput(session, "cmdk", list(theme = input$theme))
  })
  output$textOutput <- renderText({
    sprintf("You entered: %s", input$cmdk)
  })

  generate_server(my_stack, "stack")
}

shinyApp(ui, server)