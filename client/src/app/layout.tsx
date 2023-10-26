import React, { Component, ReactNode } from "react";

// the interface will specify the shape of the props
interface RootLayoutProps {
  children: ReactNode
}

class RootLayout extends Component<RootLayoutProps> {
  render(): ReactNode {
    return (
      <html lang="en">
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}