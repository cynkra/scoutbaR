#' Creates a Scoutbar React widget
#'
#' Scoutbar react widget for Shiny.
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @param inputId Widget input id.
#' @param theme Scoutbar theme.
#' @param placeholder Scoutbar placeholder text. A string or
#' a list of strings.
#' @param actions Scoutbar actions. Expect \link{scout_action}
#' or \link{scout_section} and \link{scout_page}. \link{scout_action} can
#' be nested inside \link{scout_section} and \link{scout_page}.
#' @param ... Any other configuration parameter. See
#' \url{https://www.scoutbar.co/docs/features}.
#'
#' @export
#' @rdname scout-bar
scoutbar <- function(
    inputId,
    theme = c("light", "dark", "auto"),
    placeholder = list("Hello", "Type some text"),
    actions = list(),
    ...) {
  theme <- match.arg(theme)
  reactR::createReactShinyInput(
    inputId,
    "scoutbar",
    htmltools::htmlDependency(
      name = "scoutbar-input",
      version = "1.0.0",
      src = "www/scoutbar",
      package = "scoutbaR",
      script = "scoutbar.js"
    ),
    default = NULL,
    list(
      id = inputId,
      theme = theme,
      placeholder = placeholder,
      actions = actions,
      ...
    ),
    htmltools::tags$span
  )
}

#' Creates a scout page
#'
#' Can embed \link{scout_action} on a separate
#' view of the Scoutbar.
#'
#' @param label Page label.
#' @param ... Expect \link{scout_action}.
#' @param .list To pass a list of \link{scout_action}.
#' @export
scout_page <- function(label, ..., .list = NULL) {
  scout_container("scout_page", .list, label, ...)
}

#' Creates a scout section
#'
#' Can sort \link{scout_action} on the same view.
#'
#' @param label Section label.
#' @inheritParams scout_page
#' @export
scout_section <- function(label, ..., .list = NULL) {
  scout_container("scout_section", .list, label, ...)
}

#' @keywords internal
scout_container <- function(cl, .list, label, ...) {
  list(
    children = c(list(...), .list),
    label = label,
    class = cl
  )
}

#' Creates a scout action
#'
#' Can sort \link{scout_action} on the same view.
#'
#' @param id Unique id.
#' @param label Action label.
#' @param description Action description.
#' @param ... Other options. See \url{https://www.scoutbar.co/docs/actions}.
#' @export
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

#' Update a Scoutbar widget on the client
#'
#' Usee this function from the server side of
#' your Shiny app.
#'
#' @export
#' @param session Shiny session object.
#' @param configuration Scoutbar configuration. Expect a list of properties.
#' See possible values here at \url{https://www.scoutbar.co/docs/features}.
#' @rdname scout-bar
update_scoutbar <- function(
    session = shiny::getDefaultReactiveDomain(),
    inputId,
    configuration = NULL) {
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
    session$sendInputMessage(inputId, msg)
  }
  session$sendInputMessage(inputId, message)
}
