import { Button } from '@spark-ui/button'
import { FavoriteFill } from '@spark-ui/icons/dist/icons/FavoriteFill'
import { Meta, StoryObj } from '@storybook/react'

import { addSnackbar, type AddSnackbarArgs, Snackbar } from '.'

const meta: Meta<typeof Snackbar> = {
  title: 'Experimental/Snackbar',
  component: Snackbar,
}

export default meta

const designs: ExcludeNull<AddSnackbarArgs>['design'][] = ['filled', 'tinted']

const intents: ExcludeNull<AddSnackbarArgs>['intent'][] = [
  'success',
  'alert',
  'error',
  'info',
  'neutral',
  'main',
  'basic',
  'support',
  'accent',
  'inverse',
]

export const Default: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <Button onClick={() => addSnackbar({ message: "You're done!" })}>Display snackbar</Button>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!" })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Design: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
          {designs.map(design => (
            <Button key={design} onClick={() => addSnackbar({ message: "You're done!", design })}>
              {`Display ${design}${design === 'filled' ? ' (default)' : ''} snackbar`}
            </Button>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!", design })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Intent: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <div className="grid grid-cols-2 gap-xl md:grid-cols-3">
          {intents.map(intent => (
            <Button
              key={intent}
              {...(intent === 'inverse'
                ? {
                    intent: 'neutral',
                  }
                : {
                    intent: intent === 'error' ? 'danger' : intent,
                  })}
              onClick={() => addSnackbar({ message: "You're done!", intent })}
            >
              {`Display ${intent}${intent === 'neutral' ? ' (default)' : ''} snackbar`}
            </Button>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!", intent })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Icon: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <Button
          onClick={() =>
            addSnackbar({
              message: "You're done!",
              icon: <FavoriteFill />,
            })
          }
        >
          Display snackbar
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({ message: "You're done!", icon: <FavoriteFill /> })\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Close: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar />

        <Button
          onClick={() =>
            addSnackbar({
              message: "You're done!",
              isClosable: true,
              onClose: () => console.log('Snackbar closed!'),
            })
          }
        >
          Display snackbar
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({
  message: "You're done!",
  isClosable: true,
  onClose: () => console.log('Snackbar closed!'),
})\n
return (
  <div>
    <Snackbar />
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}

export const Action: StoryObj = {
  render: () => {
    return (
      <div>
        <Snackbar>
          <Snackbar.Item>
            <Snackbar.ItemClose aria-label="Fermer" />
          </Snackbar.Item>
        </Snackbar>

        <Button
          onClick={() =>
            addSnackbar({
              message: "You're done!",
              actionLabel: 'Undo',
              onAction: () => console.log('Undone'),
            })
          }
        >
          Display snackbar
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const handleClick = () => addSnackbar({
  message: "You're done!",
  actionLabel: 'Undo',
  onAction: () => console.log('Undone'),
})\n
return (
  <div>
    <Snackbar>
      <Snackbar.Item>
        <Snackbar.ItemClose aria-label="Fermer" />
      </Snackbar.Item>
    </Snackbar>
  
    <Button onClick={handleClick}>Display snackbar</Button>
  </div>
)
         `,
      },
    },
  },
}
