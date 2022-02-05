import { useState } from 'react'

import { Container, Paper, Box, Collapse } from '@mui/material'
import classNames from 'classnames'
import { DISCORD_LINK } from '@/constants/website';

export default () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const items = [
    {
      title: 'WHAT IS THE TOTAL SUPPLY',
      description: <p className="answer">There will be 7,777 NFT’s in our collection.</p>,
    },
    {
      title: 'WHEN IS THE OFFICIAL LAUNCH',
      description: <p className="answer">The launch date is set for the end of February. BarnPass Holders will be notified 48 hours prior to mint to give ample time to fit the launch into their schedule. The Public Sale will commence 24 hours after the conclusion of the Pre-Sale.</p>,
    },
    {
      title: 'IS THERE A ROADMAP',
      description: <p className="answer">The official roadmap is under the last phase of construction. It will be released soon.</p>,
    },
    {
      title: 'HOW DO I GET A BARNPASS',
      description: <p className="answer">You can get the BarnPass role by following the steps in the <a href={DISCORD_LINK} rel="noopener noreferrer" target="_blank">Discord</a>, under the #how-to-barnpass channel.</p>,
    },
    {
      title: 'WHAT IS THE MINT PRICE OF CRYPTO COCKTAIL PARTY',
      description: <p className="answer">Our BarnPass Holders mint price will be .077. The Public Sale mint price is TBD.</p>,
    },
    {
      title: 'HOW CAN I BUY A CRYPTO COCKTAIL PARTY NFT',
      description: (
        <div className="answer">
          <p>You will be able to purchase to the NFT directly from this website on our Mint Date by using the MetaMask extension. If you are new to the NFT space, follow the steps below to set up your MetaMask.</p>
          <ol>
            <li>
              Download the{' '}
              <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                metamask.io
              </a>{' '}
              extension on your browser
            </li>
            <li>Purchase Ethereum from various exchanges. You can do so on Coinbase or Opensea for example.</li>
            <li>Transfer the Ethereum to your MetaMask wallet.</li>
          </ol>
        </div>
      ),
    },
  ]

  return (
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
        <Box className="faq-container">
          <Paper className="faq-info-box" elevation={0} sx={{ borderRadius: 12, my: 6, px: 4, py: 4 }}>
            <h1 className="title">FAQ's</h1>
            <div className="items">
              {items.map(({ title, description }, i) => (
                <div className="item" key={`faq-item-${title}`}>
                  <h2 className={classNames('question', activeFaq === i && 'expanded')} onClick={() => setActiveFaq((p) => p !== i && i)}>
                    <div>{title}?</div>
                  </h2>
                  <Collapse in={activeFaq === i}>{description}</Collapse>
                </div>
              ))}
            </div>
          </Paper>
        </Box>
      </Container>
  )
}
