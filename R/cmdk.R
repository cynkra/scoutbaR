#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
cmdkInput <- function(
  inputId,
  theme = c("light", "dark", "auto"),
  placeholder = list("Hello", "Type some text"),
  actions,
  ...
) {

  if (length(actions) == 1) {
    actions <- list(actions)
  }

  theme <- match.arg(theme)
  reactR::createReactShinyInput(
    inputId,
    "cmdk",
    htmltools::htmlDependency(
      name = "cmdk-input",
      version = "1.0.0",
      src = "www/Rcmdk/cmdk",
      package = "Rcmdk",
      script = "cmdk.js"
    ),
    default = NULL,
    list(id = inputId, theme = theme, placeholder = placeholder, actions = actions, ...),
    htmltools::tags$span
  )
}

scout_page <- function(..., label) {
  list(
    children = list(...),
    label = label,
    class = "scout_page"
  )
}

scout_section <- function(..., label) {
  list(
    children = list(...),
    label = label,
    class = "scout_section"
  )
}

scout_action <- function(id, label, description, ...) {
  props <- list(
    # id isn't passed to the HTML element so
    # we can't find it in the DOM. This is hacky but
    # works since aria-labels appears.
    ariaLabel = id,
    label = label,
    description = description,
    ...
  )

  list(
    children = props,
    class = "scout_action"
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateCmdkInput <- function(session = shiny::getDefaultReactiveDomain(), inputId, configuration = NULL) {
  message <- list()
  if (!is.null(configuration)) {
    message$configuration <- c(
      configuration,
      id = session$ns(inputId)
    )
  }
  # Reset scoutbar status
  # The scoutbar does not seem to be able to reset its state
  # from JS and adding custom React state hooks does not work well.
  if (isTRUE(message$configuration$revealScoutbar)) {
    msg <- message
    msg$configuration$revealScoutbar <- FALSE
    session$sendInputMessage(inputId, msg);
  }
  session$sendInputMessage(inputId, message);
}