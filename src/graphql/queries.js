/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApsTempCredential = /* GraphQL */ `
  query GetApsTempCredential($id: ID!) {
    getApsTempCredential(id: $id) {
      id
      apsID
      registrantId
      email
      tempPasswordCiphertext
      tempPasswordIv
      tempPasswordTag
      expiresAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsTempCredentials = /* GraphQL */ `
  query ListApsTempCredentials(
    $filter: ModelApsTempCredentialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsTempCredentials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsID
        registrantId
        email
        tempPasswordCiphertext
        tempPasswordIv
        tempPasswordTag
        expiresAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppUserNote = /* GraphQL */ `
  query GetApsAppUserNote($id: ID!) {
    getApsAppUserNote(id: $id) {
      id
      owner
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      note
      sessionId
      session {
        id
        title
        date
        startTime
        endTime
        location
        description
        agendaId
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakers {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        sponsors {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        apsAgendaItemsId
        __typename
      }
      exhibitorId
      exhibitor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      registrantId
      registrant {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      profileId
      profile {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      companyId
      company {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      apsAppUserNotesId
      __typename
    }
  }
`;
export const listApsAppUserNotes = /* GraphQL */ `
  query ListApsAppUserNotes(
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppUserNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsContactRequest = /* GraphQL */ `
  query GetApsContactRequest($id: ID!) {
    getApsContactRequest(id: $id) {
      id
      eventId
      requestKey
      userAId
      userBId
      owners
      requestedByUserId
      status
      acceptedAt
      declinedAt
      blockedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsContactRequests = /* GraphQL */ `
  query ListApsContactRequests(
    $filter: ModelApsContactRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsContactRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        requestKey
        userAId
        userBId
        owners
        requestedByUserId
        status
        acceptedAt
        declinedAt
        blockedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsDmThread = /* GraphQL */ `
  query GetApsDmThread($id: ID!) {
    getApsDmThread(id: $id) {
      id
      eventId
      dmKey
      userAId
      userBId
      owners
      participantStates {
        items {
          id
          eventId
          threadId
          thread {
            id
            eventId
            dmKey
            userAId
            userBId
            owners
            lastMessageAt
            lastMessagePreview
            createdAt
            updatedAt
            __typename
          }
          userId
          lastReadAt
          unreadCount
          lastMessageAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          eventId
          threadId
          thread {
            id
            eventId
            dmKey
            userAId
            userBId
            owners
            lastMessageAt
            lastMessagePreview
            createdAt
            updatedAt
            __typename
          }
          senderUserId
          sender {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          owners
          type
          body
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessageAt
      lastMessagePreview
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsDmThreads = /* GraphQL */ `
  query ListApsDmThreads(
    $filter: ModelApsDmThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsDmThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventId
        dmKey
        userAId
        userBId
        owners
        participantStates {
          items {
            id
            eventId
            threadId
            userId
            lastReadAt
            unreadCount
            lastMessageAt
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        messages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        lastMessageAt
        lastMessagePreview
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsDmParticipantState = /* GraphQL */ `
  query GetApsDmParticipantState($id: ID!) {
    getApsDmParticipantState(id: $id) {
      id
      eventId
      threadId
      thread {
        id
        eventId
        dmKey
        userAId
        userBId
        owners
        participantStates {
          items {
            id
            eventId
            threadId
            userId
            lastReadAt
            unreadCount
            lastMessageAt
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        messages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        lastMessageAt
        lastMessagePreview
        createdAt
        updatedAt
        __typename
      }
      userId
      lastReadAt
      unreadCount
      lastMessageAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsDmParticipantStates = /* GraphQL */ `
  query ListApsDmParticipantStates(
    $filter: ModelApsDmParticipantStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsDmParticipantStates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        threadId
        thread {
          id
          eventId
          dmKey
          userAId
          userBId
          owners
          participantStates {
            nextToken
            __typename
          }
          messages {
            nextToken
            __typename
          }
          lastMessageAt
          lastMessagePreview
          createdAt
          updatedAt
          __typename
        }
        userId
        lastReadAt
        unreadCount
        lastMessageAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsDmMessage = /* GraphQL */ `
  query GetApsDmMessage($id: ID!) {
    getApsDmMessage(id: $id) {
      id
      eventId
      threadId
      thread {
        id
        eventId
        dmKey
        userAId
        userBId
        owners
        participantStates {
          items {
            id
            eventId
            threadId
            userId
            lastReadAt
            unreadCount
            lastMessageAt
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        messages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        lastMessageAt
        lastMessagePreview
        createdAt
        updatedAt
        __typename
      }
      senderUserId
      sender {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      owners
      type
      body
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsDmMessages = /* GraphQL */ `
  query ListApsDmMessages(
    $filter: ModelApsDmMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsDmMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventId
        threadId
        thread {
          id
          eventId
          dmKey
          userAId
          userBId
          owners
          participantStates {
            nextToken
            __typename
          }
          messages {
            nextToken
            __typename
          }
          lastMessageAt
          lastMessagePreview
          createdAt
          updatedAt
          __typename
        }
        senderUserId
        sender {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        owners
        type
        body
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAdminAnnouncement = /* GraphQL */ `
  query GetApsAdminAnnouncement($id: ID!) {
    getApsAdminAnnouncement(id: $id) {
      id
      eventId
      title
      body
      deepLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsAdminAnnouncements = /* GraphQL */ `
  query ListApsAdminAnnouncements(
    $filter: ModelApsAdminAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAdminAnnouncements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        title
        body
        deepLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsUserEngageState = /* GraphQL */ `
  query GetApsUserEngageState($id: ID!) {
    getApsUserEngageState(id: $id) {
      id
      eventId
      userId
      lastSeenAnnouncementAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsUserEngageStates = /* GraphQL */ `
  query ListApsUserEngageStates(
    $filter: ModelApsUserEngageStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsUserEngageStates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        userId
        lastSeenAnnouncementAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsPushToken = /* GraphQL */ `
  query GetApsPushToken($id: ID!) {
    getApsPushToken(id: $id) {
      id
      userId
      token
      platform
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const listApsPushTokens = /* GraphQL */ `
  query ListApsPushTokens(
    $filter: ModelApsPushTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsPushTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        token
        platform
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsTempCredentialsByApsIDAndCreatedAt = /* GraphQL */ `
  query ApsTempCredentialsByApsIDAndCreatedAt(
    $apsID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsTempCredentialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsTempCredentialsByApsIDAndCreatedAt(
      apsID: $apsID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsID
        registrantId
        email
        tempPasswordCiphertext
        tempPasswordIv
        tempPasswordTag
        expiresAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsTempCredentialsByRegistrantIdAndCreatedAt = /* GraphQL */ `
  query ApsTempCredentialsByRegistrantIdAndCreatedAt(
    $registrantId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsTempCredentialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsTempCredentialsByRegistrantIdAndCreatedAt(
      registrantId: $registrantId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsID
        registrantId
        email
        tempPasswordCiphertext
        tempPasswordIv
        tempPasswordTag
        expiresAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserNotesByUserId = /* GraphQL */ `
  query ApsAppUserNotesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserNotesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserNotesBySessionId = /* GraphQL */ `
  query ApsAppUserNotesBySessionId(
    $sessionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserNotesBySessionId(
      sessionId: $sessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserNotesByExhibitorId = /* GraphQL */ `
  query ApsAppUserNotesByExhibitorId(
    $exhibitorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserNotesByExhibitorId(
      exhibitorId: $exhibitorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserNotesByRegistrantId = /* GraphQL */ `
  query ApsAppUserNotesByRegistrantId(
    $registrantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserNotesByRegistrantId(
      registrantId: $registrantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserNotesByProfileId = /* GraphQL */ `
  query ApsAppUserNotesByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserNotesByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserNotesByCompanyId = /* GraphQL */ `
  query ApsAppUserNotesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserNotesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        note
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsContactRequestsByRequestKey = /* GraphQL */ `
  query ApsContactRequestsByRequestKey(
    $requestKey: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApsContactRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsContactRequestsByRequestKey(
      requestKey: $requestKey
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        requestKey
        userAId
        userBId
        owners
        requestedByUserId
        status
        acceptedAt
        declinedAt
        blockedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsContactRequestsByRequestedByUserIdAndCreatedAt = /* GraphQL */ `
  query ApsContactRequestsByRequestedByUserIdAndCreatedAt(
    $requestedByUserId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsContactRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsContactRequestsByRequestedByUserIdAndCreatedAt(
      requestedByUserId: $requestedByUserId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        requestKey
        userAId
        userBId
        owners
        requestedByUserId
        status
        acceptedAt
        declinedAt
        blockedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsContactRequestsByStatusAndUpdatedAt = /* GraphQL */ `
  query ApsContactRequestsByStatusAndUpdatedAt(
    $status: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsContactRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsContactRequestsByStatusAndUpdatedAt(
      status: $status
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        requestKey
        userAId
        userBId
        owners
        requestedByUserId
        status
        acceptedAt
        declinedAt
        blockedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsDmThreadsByDmKey = /* GraphQL */ `
  query ApsDmThreadsByDmKey(
    $dmKey: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApsDmThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsDmThreadsByDmKey(
      dmKey: $dmKey
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        dmKey
        userAId
        userBId
        owners
        participantStates {
          items {
            id
            eventId
            threadId
            userId
            lastReadAt
            unreadCount
            lastMessageAt
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        messages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        lastMessageAt
        lastMessagePreview
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsDmParticipantStatesByThreadIdAndUserId = /* GraphQL */ `
  query ApsDmParticipantStatesByThreadIdAndUserId(
    $threadId: ID!
    $userId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsDmParticipantStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsDmParticipantStatesByThreadIdAndUserId(
      threadId: $threadId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        threadId
        thread {
          id
          eventId
          dmKey
          userAId
          userBId
          owners
          participantStates {
            nextToken
            __typename
          }
          messages {
            nextToken
            __typename
          }
          lastMessageAt
          lastMessagePreview
          createdAt
          updatedAt
          __typename
        }
        userId
        lastReadAt
        unreadCount
        lastMessageAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsDmParticipantStatesByUserIdAndLastMessageAt = /* GraphQL */ `
  query ApsDmParticipantStatesByUserIdAndLastMessageAt(
    $userId: ID!
    $lastMessageAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsDmParticipantStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsDmParticipantStatesByUserIdAndLastMessageAt(
      userId: $userId
      lastMessageAt: $lastMessageAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        threadId
        thread {
          id
          eventId
          dmKey
          userAId
          userBId
          owners
          participantStates {
            nextToken
            __typename
          }
          messages {
            nextToken
            __typename
          }
          lastMessageAt
          lastMessagePreview
          createdAt
          updatedAt
          __typename
        }
        userId
        lastReadAt
        unreadCount
        lastMessageAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsDmMessagesByThreadIdAndCreatedAt = /* GraphQL */ `
  query ApsDmMessagesByThreadIdAndCreatedAt(
    $threadId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsDmMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsDmMessagesByThreadIdAndCreatedAt(
      threadId: $threadId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        threadId
        thread {
          id
          eventId
          dmKey
          userAId
          userBId
          owners
          participantStates {
            nextToken
            __typename
          }
          messages {
            nextToken
            __typename
          }
          lastMessageAt
          lastMessagePreview
          createdAt
          updatedAt
          __typename
        }
        senderUserId
        sender {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        owners
        type
        body
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsDmMessagesBySenderUserIdAndCreatedAt = /* GraphQL */ `
  query ApsDmMessagesBySenderUserIdAndCreatedAt(
    $senderUserId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsDmMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsDmMessagesBySenderUserIdAndCreatedAt(
      senderUserId: $senderUserId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        threadId
        thread {
          id
          eventId
          dmKey
          userAId
          userBId
          owners
          participantStates {
            nextToken
            __typename
          }
          messages {
            nextToken
            __typename
          }
          lastMessageAt
          lastMessagePreview
          createdAt
          updatedAt
          __typename
        }
        senderUserId
        sender {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        owners
        type
        body
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAdminAnnouncementsByEventIdAndCreatedAt = /* GraphQL */ `
  query ApsAdminAnnouncementsByEventIdAndCreatedAt(
    $eventId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsAdminAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAdminAnnouncementsByEventIdAndCreatedAt(
      eventId: $eventId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        title
        body
        deepLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsPushTokensByUserIdAndUpdatedAt = /* GraphQL */ `
  query ApsPushTokensByUserIdAndUpdatedAt(
    $userId: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApsPushTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsPushTokensByUserIdAndUpdatedAt(
      userId: $userId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        token
        platform
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPS = /* GraphQL */ `
  query GetAPS($id: ID!) {
    getAPS(id: $id) {
      id
      year
      codes {
        items {
          id
          code
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          limit
          used
          createdAt
          updatedAt
          aPSCodesId
          __typename
        }
        nextToken
        __typename
      }
      agenda {
        id
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        items {
          items {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      startDate
      endDate
      location
      address
      city
      state
      zip
      website
      Registrants {
        items {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        nextToken
        __typename
      }
      Sponsors {
        items {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        nextToken
        __typename
      }
      Speakers {
        items {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        nextToken
        __typename
      }
      companies {
        items {
          id
          aPSId
          aPSCompanyId
          aPS {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          aPSCompany {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      photos {
        items {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          photo
          caption
          approved
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSPhotosId
          apsAppUserPhotosId
          __typename
        }
        nextToken
        __typename
      }
      exhibitors {
        items {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        nextToken
        __typename
      }
      exhibitorPromotions {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          promotion
          link
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorPromotionsId
          apsAppExhibitorProfilePromotionsId
          __typename
        }
        nextToken
        __typename
      }
      exhibitorDeals {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          deal
          link
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorDealsId
          apsAppUserExhibitorDealsId
          apsAppExhibitorProfileDealsId
          __typename
        }
        nextToken
        __typename
      }
      exhibitorPhotos {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          photo
          caption
          approved
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorPhotosId
          apsAppExhibitorProfilePhotosId
          __typename
        }
        nextToken
        __typename
      }
      exhibitorHandouts {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          handout
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorHandoutsId
          apsAppExhibitorProfileHandoutsId
          __typename
        }
        nextToken
        __typename
      }
      addOns {
        items {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      aPSAgendaId
      __typename
    }
  }
`;
export const listAPS = /* GraphQL */ `
  query ListAPS($filter: ModelAPSFilterInput, $limit: Int, $nextToken: String) {
    listAPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPSCode = /* GraphQL */ `
  query GetAPSCode($id: ID!) {
    getAPSCode(id: $id) {
      id
      code
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      limit
      used
      createdAt
      updatedAt
      aPSCodesId
      __typename
    }
  }
`;
export const listAPSCodes = /* GraphQL */ `
  query ListAPSCodes(
    $filter: ModelAPSCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        limit
        used
        createdAt
        updatedAt
        aPSCodesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aPSCodesByEventId = /* GraphQL */ `
  query APSCodesByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSCodesByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        limit
        used
        createdAt
        updatedAt
        aPSCodesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPSBoard = /* GraphQL */ `
  query GetAPSBoard($id: ID!) {
    getAPSBoard(id: $id) {
      id
      name
      title
      bio
      company
      email
      linkedin
      profilePic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAPSBoards = /* GraphQL */ `
  query ListAPSBoards(
    $filter: ModelAPSBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        bio
        company
        email
        linkedin
        profilePic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAgenda = /* GraphQL */ `
  query GetApsAgenda($id: ID!) {
    getApsAgenda(id: $id) {
      id
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      items {
        items {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsAgenda = /* GraphQL */ `
  query ListApsAgenda(
    $filter: ModelApsAgendaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAgenda(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        items {
          items {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAgendaByEventId = /* GraphQL */ `
  query ApsAgendaByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAgendaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAgendaByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        items {
          items {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsRegistrant = /* GraphQL */ `
  query GetApsRegistrant($id: ID!) {
    getApsRegistrant(id: $id) {
      id
      apsID
      aps {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      firstName
      lastName
      email
      phone
      companyId
      company {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      jobTitle
      attendeeType
      termsAccepted
      interests
      otherInterest
      interestQuestionOne
      interestQuestionTwo
      billingAddressFirstName
      billingAddressLastName
      billingAddressEmail
      billingAddressPhone
      billingAddressStreet
      billingAddressCity
      billingAddressState
      billingAddressZip
      sameAsAttendee
      speakerTopic
      learningObjectives
      totalAmount
      discountCode
      status
      paymentConfirmation
      registrationEmailSent
      registrationEmailSentDate
      registrationEmailReceived
      registrationEmailReceivedDate
      welcomeEmailSent
      welcomeEmailSentDate
      welcomeEmailReceived
      welcomeEmailReceivedDate
      paymentMethod
      paymentLast4
      approvedAt
      headshot
      presentation
      presentationTitle
      presentationSummary
      bio
      seatingChartRegistrant {
        id
        category
        firstName
        lastName
        company
        email
        role
        tableNumber
        notes
        seatingChartID
        seatingChart {
          id
          registrants {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        registrantID
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        createdAt
        updatedAt
        apsSeatingChartRegistrantsId
        __typename
      }
      addOnsRequested {
        items {
          id
          apsRegistrantId
          apsAddOnId
          apsRegistrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          apsAddOn {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      addOnsApproved {
        items {
          id
          apsRegistrantId
          apsAddOnId
          apsRegistrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          apsAddOn {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      appUserId
      appUser {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      notes {
        items {
          id
          owner
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          note
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserNotesId
          __typename
        }
        nextToken
        __typename
      }
      qrCode
      createdAt
      updatedAt
      aPSRegistrantsId
      aPSCompanyRegistrantsId
      apsRegistrantSeatingChartRegistrantId
      __typename
    }
  }
`;
export const listApsRegistrants = /* GraphQL */ `
  query ListApsRegistrants(
    $filter: ModelApsRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsRegistrants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsRegistrantsByApsID = /* GraphQL */ `
  query ApsRegistrantsByApsID(
    $apsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsRegistrantsByApsID(
      apsID: $apsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsRegistrantsByEmail = /* GraphQL */ `
  query ApsRegistrantsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelApsRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsRegistrantsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsRegistrantsByCompanyId = /* GraphQL */ `
  query ApsRegistrantsByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsRegistrantsByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppUser = /* GraphQL */ `
  query GetApsAppUser($id: ID!) {
    getApsAppUser(id: $id) {
      id
      registrantId
      registrant {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      photos {
        items {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          photo
          caption
          approved
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSPhotosId
          apsAppUserPhotosId
          __typename
        }
        nextToken
        __typename
      }
      sessionQuestions {
        items {
          id
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          question
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserSessionQuestionsId
          __typename
        }
        nextToken
        __typename
      }
      exhibitorDeals {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          deal
          link
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorDealsId
          apsAppUserExhibitorDealsId
          apsAppExhibitorProfileDealsId
          __typename
        }
        nextToken
        __typename
      }
      contacts {
        items {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          favorite
          contact {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          contactId
          createdAt
          updatedAt
          apsAppUserContactsId
          __typename
        }
        nextToken
        __typename
      }
      notes {
        items {
          id
          owner
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          note
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserNotesId
          __typename
        }
        nextToken
        __typename
      }
      leads {
        items {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          favorite
          contact {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          contactId
          createdAt
          updatedAt
          apsAppUserLeadsId
          __typename
        }
        nextToken
        __typename
      }
      sentDmMessages {
        items {
          id
          eventId
          threadId
          thread {
            id
            eventId
            dmKey
            userAId
            userBId
            owners
            lastMessageAt
            lastMessagePreview
            createdAt
            updatedAt
            __typename
          }
          senderUserId
          sender {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          owners
          type
          body
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      profileId
      profile {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsAppUsers = /* GraphQL */ `
  query ListApsAppUsers(
    $filter: ModelApsAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUsersByRegistrantId = /* GraphQL */ `
  query ApsAppUsersByRegistrantId(
    $registrantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUsersByRegistrantId(
      registrantId: $registrantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppUserContact = /* GraphQL */ `
  query GetApsAppUserContact($id: ID!) {
    getApsAppUserContact(id: $id) {
      id
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      favorite
      contact {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      contactId
      createdAt
      updatedAt
      apsAppUserContactsId
      __typename
    }
  }
`;
export const listApsAppUserContacts = /* GraphQL */ `
  query ListApsAppUserContacts(
    $filter: ModelApsAppUserContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppUserContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        favorite
        contact {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        contactId
        createdAt
        updatedAt
        apsAppUserContactsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserContactsByUserId = /* GraphQL */ `
  query ApsAppUserContactsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserContactsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        favorite
        contact {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        contactId
        createdAt
        updatedAt
        apsAppUserContactsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserContactsByContactId = /* GraphQL */ `
  query ApsAppUserContactsByContactId(
    $contactId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserContactsByContactId(
      contactId: $contactId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        favorite
        contact {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        contactId
        createdAt
        updatedAt
        apsAppUserContactsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppUserLead = /* GraphQL */ `
  query GetApsAppUserLead($id: ID!) {
    getApsAppUserLead(id: $id) {
      id
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      favorite
      contact {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      contactId
      createdAt
      updatedAt
      apsAppUserLeadsId
      __typename
    }
  }
`;
export const listApsAppUserLeads = /* GraphQL */ `
  query ListApsAppUserLeads(
    $filter: ModelApsAppUserLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppUserLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        favorite
        contact {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        contactId
        createdAt
        updatedAt
        apsAppUserLeadsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserLeadsByUserId = /* GraphQL */ `
  query ApsAppUserLeadsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserLeadsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        favorite
        contact {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        contactId
        createdAt
        updatedAt
        apsAppUserLeadsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserLeadsByContactId = /* GraphQL */ `
  query ApsAppUserLeadsByContactId(
    $contactId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserLeadsByContactId(
      contactId: $contactId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        favorite
        contact {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        contactId
        createdAt
        updatedAt
        apsAppUserLeadsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppUserProfile = /* GraphQL */ `
  query GetApsAppUserProfile($id: ID!) {
    getApsAppUserProfile(id: $id) {
      id
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      firstName
      lastName
      email
      phone
      company
      jobTitle
      attendeeType
      quickTools
      affiliates {
        items {
          id
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          affiliate
          role
          startDate
          endDate
          createdAt
          updatedAt
          apsAppUserProfileAffiliatesId
          __typename
        }
        nextToken
        __typename
      }
      profilePicture
      bio
      linkedin
      twitter
      facebook
      instagram
      youtube
      website
      location
      education {
        items {
          id
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          school
          degree
          fieldOfStudy
          createdAt
          updatedAt
          apsAppUserProfileEducationId
          __typename
        }
        nextToken
        __typename
      }
      interests {
        items {
          id
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          interest
          createdAt
          updatedAt
          apsAppUserProfileInterestsId
          __typename
        }
        nextToken
        __typename
      }
      resume
      contacts {
        items {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          favorite
          contact {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          contactId
          createdAt
          updatedAt
          apsAppUserContactsId
          __typename
        }
        nextToken
        __typename
      }
      leads {
        items {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          favorite
          contact {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          contactId
          createdAt
          updatedAt
          apsAppUserLeadsId
          __typename
        }
        nextToken
        __typename
      }
      notes {
        items {
          id
          owner
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          note
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserNotesId
          __typename
        }
        nextToken
        __typename
      }
      speakerId
      speaker {
        id
        presentationTitle
        presentationSummary
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSSpeakersId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsAppUserProfiles = /* GraphQL */ `
  query ListApsAppUserProfiles(
    $filter: ModelApsAppUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserProfilesByUserId = /* GraphQL */ `
  query ApsAppUserProfilesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserProfilesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserProfilesBySpeakerId = /* GraphQL */ `
  query ApsAppUserProfilesBySpeakerId(
    $speakerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserProfilesBySpeakerId(
      speakerId: $speakerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfileAffiliate = /* GraphQL */ `
  query GetProfileAffiliate($id: ID!) {
    getProfileAffiliate(id: $id) {
      id
      profileId
      profile {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      affiliate
      role
      startDate
      endDate
      createdAt
      updatedAt
      apsAppUserProfileAffiliatesId
      __typename
    }
  }
`;
export const listProfileAffiliates = /* GraphQL */ `
  query ListProfileAffiliates(
    $filter: ModelProfileAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileAffiliates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        affiliate
        role
        startDate
        endDate
        createdAt
        updatedAt
        apsAppUserProfileAffiliatesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profileAffiliatesByProfileId = /* GraphQL */ `
  query ProfileAffiliatesByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileAffiliatesByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        affiliate
        role
        startDate
        endDate
        createdAt
        updatedAt
        apsAppUserProfileAffiliatesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfileEducation = /* GraphQL */ `
  query GetProfileEducation($id: ID!) {
    getProfileEducation(id: $id) {
      id
      profileId
      profile {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      school
      degree
      fieldOfStudy
      createdAt
      updatedAt
      apsAppUserProfileEducationId
      __typename
    }
  }
`;
export const listProfileEducations = /* GraphQL */ `
  query ListProfileEducations(
    $filter: ModelProfileEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileEducations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        school
        degree
        fieldOfStudy
        createdAt
        updatedAt
        apsAppUserProfileEducationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profileEducationsByProfileId = /* GraphQL */ `
  query ProfileEducationsByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileEducationsByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        school
        degree
        fieldOfStudy
        createdAt
        updatedAt
        apsAppUserProfileEducationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfileInterest = /* GraphQL */ `
  query GetProfileInterest($id: ID!) {
    getProfileInterest(id: $id) {
      id
      profileId
      profile {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      interest
      createdAt
      updatedAt
      apsAppUserProfileInterestsId
      __typename
    }
  }
`;
export const listProfileInterests = /* GraphQL */ `
  query ListProfileInterests(
    $filter: ModelProfileInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        interest
        createdAt
        updatedAt
        apsAppUserProfileInterestsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profileInterestsByProfileId = /* GraphQL */ `
  query ProfileInterestsByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileInterestsByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        interest
        createdAt
        updatedAt
        apsAppUserProfileInterestsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppUserPhoto = /* GraphQL */ `
  query GetApsAppUserPhoto($id: ID!) {
    getApsAppUserPhoto(id: $id) {
      id
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      photo
      caption
      approved
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      createdAt
      updatedAt
      aPSPhotosId
      apsAppUserPhotosId
      __typename
    }
  }
`;
export const listApsAppUserPhotos = /* GraphQL */ `
  query ListApsAppUserPhotos(
    $filter: ModelApsAppUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppUserPhotos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        photo
        caption
        approved
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSPhotosId
        apsAppUserPhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserPhotosByUserId = /* GraphQL */ `
  query ApsAppUserPhotosByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserPhotosByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        photo
        caption
        approved
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSPhotosId
        apsAppUserPhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppUserPhotosByEventId = /* GraphQL */ `
  query ApsAppUserPhotosByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppUserPhotosByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        photo
        caption
        approved
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSPhotosId
        apsAppUserPhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppSession = /* GraphQL */ `
  query GetApsAppSession($id: ID!) {
    getApsAppSession(id: $id) {
      id
      title
      date
      startTime
      endTime
      location
      description
      agendaId
      agenda {
        id
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        items {
          items {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      sessionQuestions {
        items {
          id
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          question
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserSessionQuestionsId
          __typename
        }
        nextToken
        __typename
      }
      notes {
        items {
          id
          owner
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          note
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserNotesId
          __typename
        }
        nextToken
        __typename
      }
      speakers {
        items {
          id
          apsAppSessionId
          aPSSpeakerId
          apsAppSession {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          aPSSpeaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      sponsors {
        items {
          id
          apsAppSessionId
          apsSponsorId
          apsAppSession {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          apsSponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      apsAgendaItemsId
      __typename
    }
  }
`;
export const listApsAppSessions = /* GraphQL */ `
  query ListApsAppSessions(
    $filter: ModelApsAppSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        startTime
        endTime
        location
        description
        agendaId
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakers {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        sponsors {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        apsAgendaItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppSessionsByAgendaId = /* GraphQL */ `
  query ApsAppSessionsByAgendaId(
    $agendaId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppSessionsByAgendaId(
      agendaId: $agendaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        date
        startTime
        endTime
        location
        description
        agendaId
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakers {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        sponsors {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        apsAgendaItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppSessionQuestion = /* GraphQL */ `
  query GetApsAppSessionQuestion($id: ID!) {
    getApsAppSessionQuestion(id: $id) {
      id
      sessionId
      session {
        id
        title
        date
        startTime
        endTime
        location
        description
        agendaId
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakers {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        sponsors {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        apsAgendaItemsId
        __typename
      }
      question
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      apsAppUserSessionQuestionsId
      __typename
    }
  }
`;
export const listApsAppSessionQuestions = /* GraphQL */ `
  query ListApsAppSessionQuestions(
    $filter: ModelApsAppSessionQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppSessionQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        question
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserSessionQuestionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppSessionQuestionsBySessionId = /* GraphQL */ `
  query ApsAppSessionQuestionsBySessionId(
    $sessionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppSessionQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppSessionQuestionsBySessionId(
      sessionId: $sessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        question
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserSessionQuestionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppSessionQuestionsByUserId = /* GraphQL */ `
  query ApsAppSessionQuestionsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppSessionQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppSessionQuestionsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        session {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        question
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        apsAppUserSessionQuestionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPSSpeaker = /* GraphQL */ `
  query GetAPSSpeaker($id: ID!) {
    getAPSSpeaker(id: $id) {
      id
      presentationTitle
      presentationSummary
      profileId
      profile {
        id
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        firstName
        lastName
        email
        phone
        company
        jobTitle
        attendeeType
        quickTools
        affiliates {
          items {
            id
            profileId
            affiliate
            role
            startDate
            endDate
            createdAt
            updatedAt
            apsAppUserProfileAffiliatesId
            __typename
          }
          nextToken
          __typename
        }
        profilePicture
        bio
        linkedin
        twitter
        facebook
        instagram
        youtube
        website
        location
        education {
          items {
            id
            profileId
            school
            degree
            fieldOfStudy
            createdAt
            updatedAt
            apsAppUserProfileEducationId
            __typename
          }
          nextToken
          __typename
        }
        interests {
          items {
            id
            profileId
            interest
            createdAt
            updatedAt
            apsAppUserProfileInterestsId
            __typename
          }
          nextToken
          __typename
        }
        resume
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakerId
        speaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      sessions {
        items {
          id
          apsAppSessionId
          aPSSpeakerId
          apsAppSession {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          aPSSpeaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      aPSSpeakersId
      __typename
    }
  }
`;
export const listAPSSpeakers = /* GraphQL */ `
  query ListAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        presentationTitle
        presentationSummary
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSSpeakersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aPSSpeakersByProfileIdAndEventId = /* GraphQL */ `
  query APSSpeakersByProfileIdAndEventId(
    $profileId: ID!
    $eventId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSpeakersByProfileIdAndEventId(
      profileId: $profileId
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        presentationTitle
        presentationSummary
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSSpeakersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aPSSpeakersByEventId = /* GraphQL */ `
  query APSSpeakersByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSpeakersByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        presentationTitle
        presentationSummary
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSSpeakersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsSponsor = /* GraphQL */ `
  query GetApsSponsor($id: ID!) {
    getApsSponsor(id: $id) {
      id
      companyId
      company {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      profile {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      sessions {
        items {
          id
          apsAppSessionId
          apsSponsorId
          apsAppSession {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          apsSponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      type
      createdAt
      updatedAt
      aPSSponsorsId
      apsSponsorProfileId
      __typename
    }
  }
`;
export const listApsSponsors = /* GraphQL */ `
  query ListApsSponsors(
    $filter: ModelApsSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        profile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        type
        createdAt
        updatedAt
        aPSSponsorsId
        apsSponsorProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsSponsorsByCompanyId = /* GraphQL */ `
  query ApsSponsorsByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsSponsorsByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        profile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        type
        createdAt
        updatedAt
        aPSSponsorsId
        apsSponsorProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsSponsorsByEventId = /* GraphQL */ `
  query ApsSponsorsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsSponsorsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        profile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        type
        createdAt
        updatedAt
        aPSSponsorsId
        apsSponsorProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPSCompany = /* GraphQL */ `
  query GetAPSCompany($id: ID!) {
    getAPSCompany(id: $id) {
      id
      name
      email
      type
      description
      website
      phone
      address
      city
      state
      zip
      country
      logo
      events {
        items {
          id
          aPSId
          aPSCompanyId
          aPS {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          aPSCompany {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      registrants {
        items {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        nextToken
        __typename
      }
      sponsorId
      sponsor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        profile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        type
        createdAt
        updatedAt
        aPSSponsorsId
        apsSponsorProfileId
        __typename
      }
      exhibitorProfileId
      exhibitorProfile {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      notes {
        items {
          id
          owner
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          note
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserNotesId
          __typename
        }
        nextToken
        __typename
      }
      contacts {
        items {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          name
          email
          phone
          title
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAPSCompanies = /* GraphQL */ `
  query ListAPSCompanies(
    $filter: ModelAPSCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPSCompanyContact = /* GraphQL */ `
  query GetAPSCompanyContact($id: ID!) {
    getAPSCompanyContact(id: $id) {
      id
      companyId
      company {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      name
      email
      phone
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAPSCompanyContacts = /* GraphQL */ `
  query ListAPSCompanyContacts(
    $filter: ModelAPSCompanyContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSCompanyContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        name
        email
        phone
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aPSCompanyContactsByCompanyIdAndCreatedAt = /* GraphQL */ `
  query APSCompanyContactsByCompanyIdAndCreatedAt(
    $companyId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAPSCompanyContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSCompanyContactsByCompanyIdAndCreatedAt(
      companyId: $companyId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        name
        email
        phone
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppExhibitorProfile = /* GraphQL */ `
  query GetApsAppExhibitorProfile($id: ID!) {
    getApsAppExhibitorProfile(id: $id) {
      id
      companyId
      company {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      sponsorId
      sponsor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        profile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        type
        createdAt
        updatedAt
        aPSSponsorsId
        apsSponsorProfileId
        __typename
      }
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      deals {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          deal
          link
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorDealsId
          apsAppUserExhibitorDealsId
          apsAppExhibitorProfileDealsId
          __typename
        }
        nextToken
        __typename
      }
      photos {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          photo
          caption
          approved
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorPhotosId
          apsAppExhibitorProfilePhotosId
          __typename
        }
        nextToken
        __typename
      }
      handouts {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          handout
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorHandoutsId
          apsAppExhibitorProfileHandoutsId
          __typename
        }
        nextToken
        __typename
      }
      promotions {
        items {
          id
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          promotion
          link
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorPromotionsId
          apsAppExhibitorProfilePromotionsId
          __typename
        }
        nextToken
        __typename
      }
      video
      videoCaption
      boothNumber
      visits
      views
      likes
      notes {
        items {
          id
          owner
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          note
          sessionId
          session {
            id
            title
            date
            startTime
            endTime
            location
            description
            agendaId
            createdAt
            updatedAt
            apsAgendaItemsId
            __typename
          }
          exhibitorId
          exhibitor {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          apsAppUserNotesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      aPSExhibitorsId
      __typename
    }
  }
`;
export const listApsAppExhibitorProfiles = /* GraphQL */ `
  query ListApsAppExhibitorProfiles(
    $filter: ModelApsAppExhibitorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppExhibitorProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorProfilesByCompanyId = /* GraphQL */ `
  query ApsAppExhibitorProfilesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorProfilesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorProfilesBySponsorId = /* GraphQL */ `
  query ApsAppExhibitorProfilesBySponsorId(
    $sponsorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorProfilesBySponsorId(
      sponsorId: $sponsorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorProfilesByEventId = /* GraphQL */ `
  query ApsAppExhibitorProfilesByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorProfilesByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppExhibitorPromotion = /* GraphQL */ `
  query GetApsAppExhibitorPromotion($id: ID!) {
    getApsAppExhibitorPromotion(id: $id) {
      id
      exhibitorId
      exhibitor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      promotion
      link
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      createdAt
      updatedAt
      aPSExhibitorPromotionsId
      apsAppExhibitorProfilePromotionsId
      __typename
    }
  }
`;
export const listApsAppExhibitorPromotions = /* GraphQL */ `
  query ListApsAppExhibitorPromotions(
    $filter: ModelApsAppExhibitorPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppExhibitorPromotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        promotion
        link
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorPromotionsId
        apsAppExhibitorProfilePromotionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorPromotionsByExhibitorId = /* GraphQL */ `
  query ApsAppExhibitorPromotionsByExhibitorId(
    $exhibitorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorPromotionsByExhibitorId(
      exhibitorId: $exhibitorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        promotion
        link
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorPromotionsId
        apsAppExhibitorProfilePromotionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorPromotionsByEventId = /* GraphQL */ `
  query ApsAppExhibitorPromotionsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorPromotionsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        promotion
        link
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorPromotionsId
        apsAppExhibitorProfilePromotionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppExhibitorDeal = /* GraphQL */ `
  query GetApsAppExhibitorDeal($id: ID!) {
    getApsAppExhibitorDeal(id: $id) {
      id
      exhibitorId
      exhibitor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      deal
      link
      userId
      user {
        id
        registrantId
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserContactsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        leads {
          items {
            id
            userId
            favorite
            contactId
            createdAt
            updatedAt
            apsAppUserLeadsId
            __typename
          }
          nextToken
          __typename
        }
        sentDmMessages {
          items {
            id
            eventId
            threadId
            senderUserId
            owners
            type
            body
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      createdAt
      updatedAt
      aPSExhibitorDealsId
      apsAppUserExhibitorDealsId
      apsAppExhibitorProfileDealsId
      __typename
    }
  }
`;
export const listApsAppExhibitorDeals = /* GraphQL */ `
  query ListApsAppExhibitorDeals(
    $filter: ModelApsAppExhibitorDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppExhibitorDeals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        deal
        link
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorDealsId
        apsAppUserExhibitorDealsId
        apsAppExhibitorProfileDealsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorDealsByExhibitorId = /* GraphQL */ `
  query ApsAppExhibitorDealsByExhibitorId(
    $exhibitorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorDealsByExhibitorId(
      exhibitorId: $exhibitorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        deal
        link
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorDealsId
        apsAppUserExhibitorDealsId
        apsAppExhibitorProfileDealsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorDealsByUserId = /* GraphQL */ `
  query ApsAppExhibitorDealsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorDealsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        deal
        link
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorDealsId
        apsAppUserExhibitorDealsId
        apsAppExhibitorProfileDealsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorDealsByEventId = /* GraphQL */ `
  query ApsAppExhibitorDealsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorDealsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        deal
        link
        userId
        user {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorDealsId
        apsAppUserExhibitorDealsId
        apsAppExhibitorProfileDealsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppExhibitorPhoto = /* GraphQL */ `
  query GetApsAppExhibitorPhoto($id: ID!) {
    getApsAppExhibitorPhoto(id: $id) {
      id
      exhibitorId
      exhibitor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      photo
      caption
      approved
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      createdAt
      updatedAt
      aPSExhibitorPhotosId
      apsAppExhibitorProfilePhotosId
      __typename
    }
  }
`;
export const listApsAppExhibitorPhotos = /* GraphQL */ `
  query ListApsAppExhibitorPhotos(
    $filter: ModelApsAppExhibitorPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppExhibitorPhotos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        photo
        caption
        approved
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorPhotosId
        apsAppExhibitorProfilePhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorPhotosByExhibitorId = /* GraphQL */ `
  query ApsAppExhibitorPhotosByExhibitorId(
    $exhibitorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorPhotosByExhibitorId(
      exhibitorId: $exhibitorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        photo
        caption
        approved
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorPhotosId
        apsAppExhibitorProfilePhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorPhotosByEventId = /* GraphQL */ `
  query ApsAppExhibitorPhotosByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorPhotosByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        photo
        caption
        approved
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorPhotosId
        apsAppExhibitorProfilePhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAppExhibitorHandout = /* GraphQL */ `
  query GetApsAppExhibitorHandout($id: ID!) {
    getApsAppExhibitorHandout(id: $id) {
      id
      exhibitorId
      exhibitor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        deals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        handouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        promotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        video
        videoCaption
        boothNumber
        visits
        views
        likes
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorsId
        __typename
      }
      handout
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      createdAt
      updatedAt
      aPSExhibitorHandoutsId
      apsAppExhibitorProfileHandoutsId
      __typename
    }
  }
`;
export const listApsAppExhibitorHandouts = /* GraphQL */ `
  query ListApsAppExhibitorHandouts(
    $filter: ModelApsAppExhibitorHandoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAppExhibitorHandouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        handout
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorHandoutsId
        apsAppExhibitorProfileHandoutsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorHandoutsByExhibitorId = /* GraphQL */ `
  query ApsAppExhibitorHandoutsByExhibitorId(
    $exhibitorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorHandoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorHandoutsByExhibitorId(
      exhibitorId: $exhibitorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        handout
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorHandoutsId
        apsAppExhibitorProfileHandoutsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAppExhibitorHandoutsByEventId = /* GraphQL */ `
  query ApsAppExhibitorHandoutsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAppExhibitorHandoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAppExhibitorHandoutsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exhibitorId
        exhibitor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        handout
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        createdAt
        updatedAt
        aPSExhibitorHandoutsId
        apsAppExhibitorProfileHandoutsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsAddOn = /* GraphQL */ `
  query GetApsAddOn($id: ID!) {
    getApsAddOn(id: $id) {
      id
      title
      description
      subheadline
      location
      date
      time
      company
      altLink
      type
      limit
      eventId
      event {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      price
      registrantsRequested {
        items {
          id
          apsRegistrantId
          apsAddOnId
          apsRegistrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          apsAddOn {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      registrantsApproved {
        items {
          id
          apsRegistrantId
          apsAddOnId
          apsRegistrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          apsAddOn {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      aPSAddOnsId
      __typename
    }
  }
`;
export const listApsAddOns = /* GraphQL */ `
  query ListApsAddOns(
    $filter: ModelApsAddOnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsAddOns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        type
        limit
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        price
        registrantsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrantsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAddOnsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsAddOnsByEventId = /* GraphQL */ `
  query ApsAddOnsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsAddOnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsAddOnsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        type
        limit
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        price
        registrantsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrantsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAddOnsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsSeatingChart = /* GraphQL */ `
  query GetApsSeatingChart($id: ID!) {
    getApsSeatingChart(id: $id) {
      id
      registrants {
        items {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApsSeatingCharts = /* GraphQL */ `
  query ListApsSeatingCharts(
    $filter: ModelApsSeatingChartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsSeatingCharts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        registrants {
          items {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApsSeatingChartRegistrant = /* GraphQL */ `
  query GetApsSeatingChartRegistrant($id: ID!) {
    getApsSeatingChartRegistrant(id: $id) {
      id
      category
      firstName
      lastName
      company
      email
      role
      tableNumber
      notes
      seatingChartID
      seatingChart {
        id
        registrants {
          items {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      registrantID
      registrant {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      createdAt
      updatedAt
      apsSeatingChartRegistrantsId
      __typename
    }
  }
`;
export const listApsSeatingChartRegistrants = /* GraphQL */ `
  query ListApsSeatingChartRegistrants(
    $filter: ModelApsSeatingChartRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApsSeatingChartRegistrants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        firstName
        lastName
        company
        email
        role
        tableNumber
        notes
        seatingChartID
        seatingChart {
          id
          registrants {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        registrantID
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        createdAt
        updatedAt
        apsSeatingChartRegistrantsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsSeatingChartRegistrantsBySeatingChartID = /* GraphQL */ `
  query ApsSeatingChartRegistrantsBySeatingChartID(
    $seatingChartID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsSeatingChartRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsSeatingChartRegistrantsBySeatingChartID(
      seatingChartID: $seatingChartID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        firstName
        lastName
        company
        email
        role
        tableNumber
        notes
        seatingChartID
        seatingChart {
          id
          registrants {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        registrantID
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        createdAt
        updatedAt
        apsSeatingChartRegistrantsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const apsSeatingChartRegistrantsByRegistrantID = /* GraphQL */ `
  query ApsSeatingChartRegistrantsByRegistrantID(
    $registrantID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApsSeatingChartRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apsSeatingChartRegistrantsByRegistrantID(
      registrantID: $registrantID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        firstName
        lastName
        company
        email
        role
        tableNumber
        notes
        seatingChartID
        seatingChart {
          id
          registrants {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        registrantID
        registrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        createdAt
        updatedAt
        apsSeatingChartRegistrantsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAPSCompanyEvents = /* GraphQL */ `
  query GetAPSCompanyEvents($id: ID!) {
    getAPSCompanyEvents(id: $id) {
      id
      aPSId
      aPSCompanyId
      aPS {
        id
        year
        codes {
          items {
            id
            code
            eventId
            limit
            used
            createdAt
            updatedAt
            aPSCodesId
            __typename
          }
          nextToken
          __typename
        }
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        startDate
        endDate
        location
        address
        city
        state
        zip
        website
        Registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        Sponsors {
          items {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          nextToken
          __typename
        }
        Speakers {
          items {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          nextToken
          __typename
        }
        companies {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        photos {
          items {
            id
            userId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSPhotosId
            apsAppUserPhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitors {
          items {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPromotions {
          items {
            id
            exhibitorId
            promotion
            link
            eventId
            createdAt
            updatedAt
            aPSExhibitorPromotionsId
            apsAppExhibitorProfilePromotionsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorDeals {
          items {
            id
            exhibitorId
            deal
            link
            userId
            eventId
            createdAt
            updatedAt
            aPSExhibitorDealsId
            apsAppUserExhibitorDealsId
            apsAppExhibitorProfileDealsId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorPhotos {
          items {
            id
            exhibitorId
            photo
            caption
            approved
            eventId
            createdAt
            updatedAt
            aPSExhibitorPhotosId
            apsAppExhibitorProfilePhotosId
            __typename
          }
          nextToken
          __typename
        }
        exhibitorHandouts {
          items {
            id
            exhibitorId
            handout
            eventId
            createdAt
            updatedAt
            aPSExhibitorHandoutsId
            apsAppExhibitorProfileHandoutsId
            __typename
          }
          nextToken
          __typename
        }
        addOns {
          items {
            id
            title
            description
            subheadline
            location
            date
            time
            company
            altLink
            type
            limit
            eventId
            price
            createdAt
            updatedAt
            aPSAddOnsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAgendaId
        __typename
      }
      aPSCompany {
        id
        name
        email
        type
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
        events {
          items {
            id
            aPSId
            aPSCompanyId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrants {
          items {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          nextToken
          __typename
        }
        sponsorId
        sponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        exhibitorProfileId
        exhibitorProfile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        contacts {
          items {
            id
            companyId
            name
            email
            phone
            title
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAPSCompanyEvents = /* GraphQL */ `
  query ListAPSCompanyEvents(
    $filter: ModelAPSCompanyEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSCompanyEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        aPSCompanyId
        aPS {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        aPSCompany {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aPSCompanyEventsByAPSId = /* GraphQL */ `
  query APSCompanyEventsByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSCompanyEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSCompanyEventsByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        aPSCompanyId
        aPS {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        aPSCompany {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aPSCompanyEventsByAPSCompanyId = /* GraphQL */ `
  query APSCompanyEventsByAPSCompanyId(
    $aPSCompanyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSCompanyEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSCompanyEventsByAPSCompanyId(
      aPSCompanyId: $aPSCompanyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        aPSCompanyId
        aPS {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        aPSCompany {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRegistrantAddOnsRequested = /* GraphQL */ `
  query GetRegistrantAddOnsRequested($id: ID!) {
    getRegistrantAddOnsRequested(id: $id) {
      id
      apsRegistrantId
      apsAddOnId
      apsRegistrant {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      apsAddOn {
        id
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        type
        limit
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        price
        registrantsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrantsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAddOnsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRegistrantAddOnsRequesteds = /* GraphQL */ `
  query ListRegistrantAddOnsRequesteds(
    $filter: ModelRegistrantAddOnsRequestedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrantAddOnsRequesteds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsRegistrantId
        apsAddOnId
        apsRegistrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        apsAddOn {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrantAddOnsRequestedsByApsRegistrantId = /* GraphQL */ `
  query RegistrantAddOnsRequestedsByApsRegistrantId(
    $apsRegistrantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrantAddOnsRequestedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrantAddOnsRequestedsByApsRegistrantId(
      apsRegistrantId: $apsRegistrantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsRegistrantId
        apsAddOnId
        apsRegistrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        apsAddOn {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrantAddOnsRequestedsByApsAddOnId = /* GraphQL */ `
  query RegistrantAddOnsRequestedsByApsAddOnId(
    $apsAddOnId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrantAddOnsRequestedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrantAddOnsRequestedsByApsAddOnId(
      apsAddOnId: $apsAddOnId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsRegistrantId
        apsAddOnId
        apsRegistrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        apsAddOn {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRegistrantAddOnsApproved = /* GraphQL */ `
  query GetRegistrantAddOnsApproved($id: ID!) {
    getRegistrantAddOnsApproved(id: $id) {
      id
      apsRegistrantId
      apsAddOnId
      apsRegistrant {
        id
        apsID
        aps {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        firstName
        lastName
        email
        phone
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        jobTitle
        attendeeType
        termsAccepted
        interests
        otherInterest
        interestQuestionOne
        interestQuestionTwo
        billingAddressFirstName
        billingAddressLastName
        billingAddressEmail
        billingAddressPhone
        billingAddressStreet
        billingAddressCity
        billingAddressState
        billingAddressZip
        sameAsAttendee
        speakerTopic
        learningObjectives
        totalAmount
        discountCode
        status
        paymentConfirmation
        registrationEmailSent
        registrationEmailSentDate
        registrationEmailReceived
        registrationEmailReceivedDate
        welcomeEmailSent
        welcomeEmailSentDate
        welcomeEmailReceived
        welcomeEmailReceivedDate
        paymentMethod
        paymentLast4
        approvedAt
        headshot
        presentation
        presentationTitle
        presentationSummary
        bio
        seatingChartRegistrant {
          id
          category
          firstName
          lastName
          company
          email
          role
          tableNumber
          notes
          seatingChartID
          seatingChart {
            id
            createdAt
            updatedAt
            __typename
          }
          registrantID
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          createdAt
          updatedAt
          apsSeatingChartRegistrantsId
          __typename
        }
        addOnsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        addOnsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        appUserId
        appUser {
          id
          registrantId
          registrant {
            id
            apsID
            firstName
            lastName
            email
            phone
            companyId
            jobTitle
            attendeeType
            termsAccepted
            interests
            otherInterest
            interestQuestionOne
            interestQuestionTwo
            billingAddressFirstName
            billingAddressLastName
            billingAddressEmail
            billingAddressPhone
            billingAddressStreet
            billingAddressCity
            billingAddressState
            billingAddressZip
            sameAsAttendee
            speakerTopic
            learningObjectives
            totalAmount
            discountCode
            status
            paymentConfirmation
            registrationEmailSent
            registrationEmailSentDate
            registrationEmailReceived
            registrationEmailReceivedDate
            welcomeEmailSent
            welcomeEmailSentDate
            welcomeEmailReceived
            welcomeEmailReceivedDate
            paymentMethod
            paymentLast4
            approvedAt
            headshot
            presentation
            presentationTitle
            presentationSummary
            bio
            appUserId
            qrCode
            createdAt
            updatedAt
            aPSRegistrantsId
            aPSCompanyRegistrantsId
            apsRegistrantSeatingChartRegistrantId
            __typename
          }
          photos {
            nextToken
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          sentDmMessages {
            nextToken
            __typename
          }
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        qrCode
        createdAt
        updatedAt
        aPSRegistrantsId
        aPSCompanyRegistrantsId
        apsRegistrantSeatingChartRegistrantId
        __typename
      }
      apsAddOn {
        id
        title
        description
        subheadline
        location
        date
        time
        company
        altLink
        type
        limit
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        price
        registrantsRequested {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        registrantsApproved {
          items {
            id
            apsRegistrantId
            apsAddOnId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSAddOnsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRegistrantAddOnsApproveds = /* GraphQL */ `
  query ListRegistrantAddOnsApproveds(
    $filter: ModelRegistrantAddOnsApprovedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrantAddOnsApproveds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsRegistrantId
        apsAddOnId
        apsRegistrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        apsAddOn {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrantAddOnsApprovedsByApsRegistrantId = /* GraphQL */ `
  query RegistrantAddOnsApprovedsByApsRegistrantId(
    $apsRegistrantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrantAddOnsApprovedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrantAddOnsApprovedsByApsRegistrantId(
      apsRegistrantId: $apsRegistrantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsRegistrantId
        apsAddOnId
        apsRegistrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        apsAddOn {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrantAddOnsApprovedsByApsAddOnId = /* GraphQL */ `
  query RegistrantAddOnsApprovedsByApsAddOnId(
    $apsAddOnId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrantAddOnsApprovedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrantAddOnsApprovedsByApsAddOnId(
      apsAddOnId: $apsAddOnId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsRegistrantId
        apsAddOnId
        apsRegistrant {
          id
          apsID
          aps {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          firstName
          lastName
          email
          phone
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          jobTitle
          attendeeType
          termsAccepted
          interests
          otherInterest
          interestQuestionOne
          interestQuestionTwo
          billingAddressFirstName
          billingAddressLastName
          billingAddressEmail
          billingAddressPhone
          billingAddressStreet
          billingAddressCity
          billingAddressState
          billingAddressZip
          sameAsAttendee
          speakerTopic
          learningObjectives
          totalAmount
          discountCode
          status
          paymentConfirmation
          registrationEmailSent
          registrationEmailSentDate
          registrationEmailReceived
          registrationEmailReceivedDate
          welcomeEmailSent
          welcomeEmailSentDate
          welcomeEmailReceived
          welcomeEmailReceivedDate
          paymentMethod
          paymentLast4
          approvedAt
          headshot
          presentation
          presentationTitle
          presentationSummary
          bio
          seatingChartRegistrant {
            id
            category
            firstName
            lastName
            company
            email
            role
            tableNumber
            notes
            seatingChartID
            registrantID
            createdAt
            updatedAt
            apsSeatingChartRegistrantsId
            __typename
          }
          addOnsRequested {
            nextToken
            __typename
          }
          addOnsApproved {
            nextToken
            __typename
          }
          appUserId
          appUser {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          notes {
            nextToken
            __typename
          }
          qrCode
          createdAt
          updatedAt
          aPSRegistrantsId
          aPSCompanyRegistrantsId
          apsRegistrantSeatingChartRegistrantId
          __typename
        }
        apsAddOn {
          id
          title
          description
          subheadline
          location
          date
          time
          company
          altLink
          type
          limit
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          price
          registrantsRequested {
            nextToken
            __typename
          }
          registrantsApproved {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAddOnsId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSessionSpeakers = /* GraphQL */ `
  query GetSessionSpeakers($id: ID!) {
    getSessionSpeakers(id: $id) {
      id
      apsAppSessionId
      aPSSpeakerId
      apsAppSession {
        id
        title
        date
        startTime
        endTime
        location
        description
        agendaId
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakers {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        sponsors {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        apsAgendaItemsId
        __typename
      }
      aPSSpeaker {
        id
        presentationTitle
        presentationSummary
        profileId
        profile {
          id
          userId
          user {
            id
            registrantId
            profileId
            createdAt
            updatedAt
            __typename
          }
          firstName
          lastName
          email
          phone
          company
          jobTitle
          attendeeType
          quickTools
          affiliates {
            nextToken
            __typename
          }
          profilePicture
          bio
          linkedin
          twitter
          facebook
          instagram
          youtube
          website
          location
          education {
            nextToken
            __typename
          }
          interests {
            nextToken
            __typename
          }
          resume
          contacts {
            nextToken
            __typename
          }
          leads {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakerId
          speaker {
            id
            presentationTitle
            presentationSummary
            profileId
            eventId
            createdAt
            updatedAt
            aPSSpeakersId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        aPSSpeakersId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSessionSpeakers = /* GraphQL */ `
  query ListSessionSpeakers(
    $filter: ModelSessionSpeakersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apsAppSessionId
        aPSSpeakerId
        apsAppSession {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        aPSSpeaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sessionSpeakersByApsAppSessionId = /* GraphQL */ `
  query SessionSpeakersByApsAppSessionId(
    $apsAppSessionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionSpeakersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionSpeakersByApsAppSessionId(
      apsAppSessionId: $apsAppSessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsAppSessionId
        aPSSpeakerId
        apsAppSession {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        aPSSpeaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sessionSpeakersByAPSSpeakerId = /* GraphQL */ `
  query SessionSpeakersByAPSSpeakerId(
    $aPSSpeakerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionSpeakersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionSpeakersByAPSSpeakerId(
      aPSSpeakerId: $aPSSpeakerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsAppSessionId
        aPSSpeakerId
        apsAppSession {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        aPSSpeaker {
          id
          presentationTitle
          presentationSummary
          profileId
          profile {
            id
            userId
            firstName
            lastName
            email
            phone
            company
            jobTitle
            attendeeType
            quickTools
            profilePicture
            bio
            linkedin
            twitter
            facebook
            instagram
            youtube
            website
            location
            resume
            speakerId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSSpeakersId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSessionSponsors = /* GraphQL */ `
  query GetSessionSponsors($id: ID!) {
    getSessionSponsors(id: $id) {
      id
      apsAppSessionId
      apsSponsorId
      apsAppSession {
        id
        title
        date
        startTime
        endTime
        location
        description
        agendaId
        agenda {
          id
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          items {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sessionQuestions {
          items {
            id
            sessionId
            question
            userId
            createdAt
            updatedAt
            apsAppUserSessionQuestionsId
            __typename
          }
          nextToken
          __typename
        }
        notes {
          items {
            id
            owner
            userId
            note
            sessionId
            exhibitorId
            registrantId
            profileId
            companyId
            createdAt
            updatedAt
            apsAppUserNotesId
            __typename
          }
          nextToken
          __typename
        }
        speakers {
          items {
            id
            apsAppSessionId
            aPSSpeakerId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        sponsors {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        apsAgendaItemsId
        __typename
      }
      apsSponsor {
        id
        companyId
        company {
          id
          name
          email
          type
          description
          website
          phone
          address
          city
          state
          zip
          country
          logo
          events {
            nextToken
            __typename
          }
          registrants {
            nextToken
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          exhibitorProfileId
          exhibitorProfile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          notes {
            nextToken
            __typename
          }
          contacts {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        eventId
        event {
          id
          year
          codes {
            nextToken
            __typename
          }
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          location
          address
          city
          state
          zip
          website
          Registrants {
            nextToken
            __typename
          }
          Sponsors {
            nextToken
            __typename
          }
          Speakers {
            nextToken
            __typename
          }
          companies {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          exhibitors {
            nextToken
            __typename
          }
          exhibitorPromotions {
            nextToken
            __typename
          }
          exhibitorDeals {
            nextToken
            __typename
          }
          exhibitorPhotos {
            nextToken
            __typename
          }
          exhibitorHandouts {
            nextToken
            __typename
          }
          addOns {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSAgendaId
          __typename
        }
        profile {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          sponsorId
          sponsor {
            id
            companyId
            eventId
            type
            createdAt
            updatedAt
            aPSSponsorsId
            apsSponsorProfileId
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          deals {
            nextToken
            __typename
          }
          photos {
            nextToken
            __typename
          }
          handouts {
            nextToken
            __typename
          }
          promotions {
            nextToken
            __typename
          }
          video
          videoCaption
          boothNumber
          visits
          views
          likes
          notes {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          aPSExhibitorsId
          __typename
        }
        sessions {
          items {
            id
            apsAppSessionId
            apsSponsorId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        type
        createdAt
        updatedAt
        aPSSponsorsId
        apsSponsorProfileId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSessionSponsors = /* GraphQL */ `
  query ListSessionSponsors(
    $filter: ModelSessionSponsorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apsAppSessionId
        apsSponsorId
        apsAppSession {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        apsSponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sessionSponsorsByApsAppSessionId = /* GraphQL */ `
  query SessionSponsorsByApsAppSessionId(
    $apsAppSessionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionSponsorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionSponsorsByApsAppSessionId(
      apsAppSessionId: $apsAppSessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsAppSessionId
        apsSponsorId
        apsAppSession {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        apsSponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sessionSponsorsByApsSponsorId = /* GraphQL */ `
  query SessionSponsorsByApsSponsorId(
    $apsSponsorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionSponsorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionSponsorsByApsSponsorId(
      apsSponsorId: $apsSponsorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apsAppSessionId
        apsSponsorId
        apsAppSession {
          id
          title
          date
          startTime
          endTime
          location
          description
          agendaId
          agenda {
            id
            eventId
            createdAt
            updatedAt
            __typename
          }
          sessionQuestions {
            nextToken
            __typename
          }
          notes {
            nextToken
            __typename
          }
          speakers {
            nextToken
            __typename
          }
          sponsors {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          apsAgendaItemsId
          __typename
        }
        apsSponsor {
          id
          companyId
          company {
            id
            name
            email
            type
            description
            website
            phone
            address
            city
            state
            zip
            country
            logo
            sponsorId
            exhibitorProfileId
            createdAt
            updatedAt
            __typename
          }
          eventId
          event {
            id
            year
            startDate
            endDate
            location
            address
            city
            state
            zip
            website
            createdAt
            updatedAt
            aPSAgendaId
            __typename
          }
          profile {
            id
            companyId
            sponsorId
            eventId
            video
            videoCaption
            boothNumber
            visits
            views
            likes
            createdAt
            updatedAt
            aPSExhibitorsId
            __typename
          }
          sessions {
            nextToken
            __typename
          }
          type
          createdAt
          updatedAt
          aPSSponsorsId
          apsSponsorProfileId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
