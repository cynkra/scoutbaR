#' Creates a Scoutbar React widget
#'
#' Scoutbar react widget for Shiny.
#'
#' Provides a contextual menu users can activate
#' with keyboard shortcut or programmatically with \link{update_scoutbar}.
#' Scoutbar may be seen as an alternative to sidebars and navbars, as it allows
#' to construct better navigation menus.
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @param inputId Widget input id.
#' You can check the scoutbar configuration with \code{input[["<inputId>-configuration"]]}.
#' You can query the scoutbar open state with \code{input[["<inputId>-open"]]}.
#' @param theme Scoutbar theme.
#' @param placeholder Scoutbar placeholder text. A string or
#' a list of strings.
#' @param actions Scoutbar actions. Expect \link{scout_action}
#' or \link{scout_section} and \link{scout_page}. \link{scout_action} can
#' be nested inside \link{scout_section} and \link{scout_page}.
#' @param ... Any other configuration parameter. See
#' \url{https://www.scoutbar.co/docs/features}.
#'
#' @return A list of shiny tags containing all the web dependencies
#' and scoutbar elements required to instantiate the Scoutbar React widget from
#' JavaScript.
#' @export
#' @rdname scoutbar
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
      version = utils::packageVersion(utils::packageName()),
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
#' Whenever many \link{scout_action} share a similar topic,
#' or have nested topics, this function allows you to provide a better
#' experience by isolating some actions in a separate view. You can nest
#' pages within other pages and combine it with \link{scout_section}.
#'
#' @param label Page label.
#' @param ... Expect \link{scout_action}.
#' @param .list To programmatically pass a list of \link{scout_action},
#' with \code{lapply} for instance.
#' @return A list containing:
#' \itemize{
#'  \item children: a sublist where are passed the \link{scout_action}.
#'  \item label: The page label.
#'  \item class: a character vector to identify the page on the JavaScript side.
#'  You are not expected to modify it as it will break the JavaScript binding.
#'  }
#' @export
scout_page <- function(label, ..., .list = NULL) {
  scout_container("scout_page", .list, label, ...)
}

#' Creates a scout section
#'
#' Sort \link{scout_action} on the same view.
#'
#' Whenever many \link{scout_action} share a similar topic,
#' you may use this function to sort them in the UI and offer
#' a better user experience. You can combine it with \link{scout_page}.
#'
#' @param label Section label.
#' @inheritParams scout_page
#' @return A list containing:
#' \itemize{
#'  \item children: a sublist where are passed the \link{scout_action}.
#'  \item label: The section label.
#'  \item class: a character vector to identify the section on the JavaScript side.
#'  You are not expected to modify it as it will break the JavaScript binding.
#'  }
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
#' Creates an item that can perform actions on the server side.
#'
#' This function is meant to be embeded directly within
#' \link{scoutbar} or via a more structured way within \link{scout_page}
#' or \link{scout_section}. It serves as a bridge between R and JavaScript to
#' communicate with the Scoutbar React API, so you are not expected to call it on its
#' own.
#'
#' @param id Unique id.
#' @param label Action label.
#' @param description Action description.
#' @param closeOnClick Whether to close the scoutbar whenever this action is
#' clicked. Default to TRUE.
#' @param ... Other options. See \url{https://www.scoutbar.co/docs/actions}.
#' @return A list containing:
#' \itemize{
#'  \item children: a sublist where are passed the options.
#'  \item class: a character vector to identify the action on the JavaScript side.
#'  You are not expected to modify it as it will break the JavaScript binding.
#'  }
#' @export
scout_action <- function(id, label, description, closeOnClick = TRUE, ...) {
  props <- list(
    # id isn't passed to the HTML element so
    # we can't find it in the DOM. This is hacky but
    # works since aria-labels appears.
    ariaLabel = id,
    label = label,
    description = description,
    closeOnClick = closeOnClick,
    ...
  )

  list(
    children = props,
    class = "scout_action"
  )
}

#' Update a Scoutbar widget on the client
#'
#' Use this function from the server side of
#' your Shiny app to update a \link{scoutbar}.
#'
#' @export
#' @param session Shiny session object.
#' @param ... Scoutbar configuration. Expect a list of properties
#' like in \link{scoutbar}. See possible values here at \url{https://www.scoutbar.co/docs/features}.
#' @return This function is called for its side effect. It sends a message to JavaScript
#' through the current websocket connection, leveraging the shiny session object.
#' @rdname scoutbar
update_scoutbar <- function(
    session = shiny::getDefaultReactiveDomain(),
    inputId,
    ...) {
  message <- list()
  configuration <- list(...)
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
